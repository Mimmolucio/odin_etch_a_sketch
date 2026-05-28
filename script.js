const container = document.querySelector("#container")
const pixel = document.createElement("div")

function createGrid(length) {
    let i = 0
    const resolution = length*length
    const width = 320/length

    pixel.style.minWidth = width+"px"

    while (i < resolution) {
        container.appendChild(pixel.cloneNode(true))
        i++
    }
}

createGrid(16)