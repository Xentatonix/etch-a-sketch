let grid = document.querySelector(".grid");
let gridInput = document.querySelector("#gridInput");

const gridSize = 600;
grid.style.setProperty('--gridSize', `${gridSize}px`);

let pixelNodeList;

let changeColour = e => {
    e.target.style.backgroundColor = "black";
}

let createPixels = e => {
    grid.textContent = '';
    let numPixels = e.target.value**2;
    
    for (let pixelsAdded = 0; pixelsAdded < numPixels; pixelsAdded++) {
        let pixel = document.createElement("div");
        pixel.style.setProperty('--pixelSize', `${gridSize/e.target.value}px`);
        pixel.classList.add("pixel");
        
        pixel.addEventListener("mousedown", changeColour)

        grid.appendChild(pixel);
    };

}

gridInput.addEventListener("input", createPixels);

