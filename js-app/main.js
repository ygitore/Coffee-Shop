const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    getAllCoffee()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

const getAllBeanVarieties = () => {
    return fetch(beanVarietyUrl).then(resp => resp.json());
}

const getAllCoffee = () => {
    return fetch(coffeeUrl).then(resp => resp.json());
}
