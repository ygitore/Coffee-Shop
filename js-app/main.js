import { BeanVariety} from './beanVariety/BeanVariety.js' 
import { Coffee} from './coffee/Coffee.js' 
import {getCoffee, useCoffee, saveCoffee, DeleteCoffee} from './coffee/CoffeeProvider.js'
import {getAllBeanVarieties} from './beanVariety/BeanVarietyList.js'

const eventHub = document.querySelector("#main-container")

const button = document.querySelector("#run-button");
const beans = document.querySelector("#all--beans");
const coffee = document.querySelector("#all-coffee");

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beans.innerHTML = beanVarieties.map(bean => BeanVariety(bean)).join("")
        })
    getCoffee()
        .then(() => {
            const allCoffee = useCoffee()
            coffee.innerHTML = allCoffee.map(coffee => Coffee(coffee)).join("")
        })
});


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "add--new_coffee_variety") {

        const beanId = parseInt(document.querySelector("#beanvarietyId").value)
        const title = document.querySelector("#title").value

        // Make a new object representation of a note
        const newCoffee = {
            beanvarietyId: beanId,
            title: title
        }

        // Change API state and application state
        saveCoffee(newCoffee)
    }
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "btn--delete-coffee") {

        const coffeeId = parseInt(document.querySelector("#input--delete-coffee").value)
        // Change API state and application state
        DeleteCoffee(coffeeId)
    }
})



