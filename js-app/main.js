import { BeanVariety} from './beanVariety/BeanVariety.js' 
import { Coffee} from './coffee/Coffee.js' 
import { saveBean} from './beanVariety/AddBean.js'

const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
const beans = document.querySelector("#all--beans");
const coffee = document.querySelector("#all-coffee");

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beans.innerHTML = beanVarieties.map(bean => BeanVariety(bean)).join("")
        })
    getAllCoffee()
        .then(allCoffee => {
            coffee.innerHTML = allCoffee.map(coffee => Coffee(coffee)).join("")
        })
});

const eventHub = document.querySelector("#main-container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "add--new_bean_variety") {

        const name = document.querySelector("#name").value
        const region = document.querySelector("#region").value
        const notes = document.querySelector("#notes").value

        // Make a new object representation of a note
        const newBeanVariety = {
            name: name,
            region: region,
            notes: notes
        }

        // Change API state and application state
        saveBean(newBeanVariety)
    }
})
const getAllBeanVarieties = () => {
    return fetch(beanVarietyUrl).then(resp => resp.json());
}
const getAllCoffee = () => {
    return fetch(coffeeUrl).then(resp => resp.json());
}


