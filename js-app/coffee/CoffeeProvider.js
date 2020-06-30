const url = "https://localhost:5001/api/coffee/";

const eventHub = document.querySelector("#main-container")

let coffee = []
export const useCoffee = () => coffee.slice()

const dispatchStateChangeEvent = () => {
    const coffeeStateEvent = new CustomEvent("coffee state changed")

    eventHub.dispatchEvent(coffeeStateEvent)
}

export const getCoffee = () => {
    return fetch(url).then(resp => resp.json())
    .then(parsedCoffee => {
        coffee = parsedCoffee
    })
}

export const saveCoffee = coffee => {
    return fetch('https://localhost:5001/api/coffee/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coffee)
    })
    .then(coffee)
    .then(dispatchStateChangeEvent)
}

export const DeleteCoffee = (coffeeId) => {
    return fetch(`https://localhost:5001/api/coffee/${coffeeId}`, {
        method : "DELETE"
    })
    .then(getCoffee)
    .then(dispatchStateChangeEvent)
}