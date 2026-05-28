const container = document.querySelector("#container")
const pixel = document.createElement("div")

function createGrid(length) {
    let i = 0

    while (i < length) {
        container.appendChild(pixel.cloneNode(true))
        i++
    }
}

createGrid(16)