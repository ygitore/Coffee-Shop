using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeShop.Models;
using CoffeeShop.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CoffeeShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        private readonly CoffeeRepository _coffeeRepository;
        public CoffeeController(IConfiguration config)
        {
            _coffeeRepository = new CoffeeRepository(config);
        }
        // https://localhost:5001/api/coffee/
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_coffeeRepository.GetAll());
        }
        // https://localhost:5001/api/coffee/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var coffee = _coffeeRepository.Get(id);
            if (coffee == null)
            {
                return NotFound();
            }
            return Ok(coffee);
        }
        // https://localhost:5000/api/coffee/
        [HttpPost]
        public IActionResult Post(Coffee coffee)
        {
            _coffeeRepository.AddCoffee(coffee);
            return CreatedAtAction("Get", new { id = coffee.Id }, coffee);
        }

        // https://localhost:5000/api/coffee/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Coffee coffee)
        {
            if (id != coffee.Id)
            {
                return BadRequest();
            }

            _coffeeRepository.UpdateCoffee(coffee);
            return NoContent();
        }

        // https://localhost:5000/api/coffee/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _coffeeRepository.DeleteCoffee(id);
                return NoContent();
            }
            catch (NullReferenceException ex)
            {
                return NotFound();
            }
        }
    }
}
