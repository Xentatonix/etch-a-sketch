let grid = document.querySelector(".grid");
let gridInput = document.querySelector("#gridInput");

const gridSize = 600;
grid.style.setProperty('--gridSize', `${gridSize}px`);

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
        
        grid.appendChild(pixel);
    };

}

gridInput.addEventListener("change", createPixels);


let activateColourEvent = e => {
    e.srcElement.style.backgroundColor = "black";

    let PixelNodeList = document.querySelectorAll(".pixel");

    PixelNodeList.forEach(
        pixel => {
            pixel.addEventListener("mouseover", changeColour)
        }
    );
}

let deactivateColourEvent = e => {

    let PixelNodeList = document.querySelectorAll(".pixel");

    PixelNodeList.forEach(
        pixel => {
            pixel.removeEventListener("mouseover",changeColour);
        }
    )
}


grid.addEventListener("mousedown", activateColourEvent)
grid.addEventListener("mouseup", deactivateColourEvent)
