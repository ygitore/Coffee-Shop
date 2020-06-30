const notes = []
const eventHub = document.querySelector("#main-container")

const dispatchStateChangeEvent = () => {
    const coffeeStateEvent = new CustomEvent("coffee state changed")

    eventHub.dispatchEvent(coffeeStateEvent)
}

export const getNotes = () => {
    return fetch('https://localhost:5001/api/coffee/')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}
export const saveBean = note => {
    return fetch('https://localhost:5001/api/coffee/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(note)
    .then(dispatchStateChangeEvent)
}
