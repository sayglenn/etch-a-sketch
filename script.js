const container = document.querySelector('.container');
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.height = "725px";
container.style.width = "725px";
container.style.margin = "auto";
container.style.boxShadow = "5px 10px 8px rgba(0, 0, 0, 2)";

for (let i = 0; i < 16; i++) {
    const length = Math.floor(725 / 16);
    const newOuterDiv = document.createElement("div");
    newOuterDiv.style.display = "flex";
    for (let j = 0; j < 16; j++) {
        const newInnerDiv = document.createElement("div");
        newInnerDiv.style.height = length + "px";
        newInnerDiv.style.width = length + "px";
        newInnerDiv.classList.add("inner");
        newOuterDiv.appendChild(newInnerDiv);
    }
    container.appendChild(newOuterDiv);
}

function generateRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

const innerDiv = document.querySelector(".inner");
container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('inner')) {
        event.target.style.backgroundColor = generateRGB();
    }
});

container.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('inner')) {
        event.target.style.backgroundColor = "white";
    }
});

const generator = document.querySelector(".grid-creator");
const subtext = document.querySelector(".subtext");

generator.onclick = () => {
    const number = Number(window.prompt("Please enter a number from 1 - 100"));
    if (!Number.isInteger(number)) {
        alert("Please enter a valid number.")
    } else if (number < 1 || number > 100) {
        alert("Please enter a number from 1 to 100.")
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        for (let i = 0; i < number; i++) {
            const length = Math.floor(725 / number);
            const newOuterDiv = document.createElement("div");
            newOuterDiv.style.display = "flex";
            for (let j = 0; j < number; j++) {
                const newInnerDiv = document.createElement("div");
                newInnerDiv.style.height = length + "px";
                newInnerDiv.style.width = length + "px";
                newInnerDiv.classList.add("inner");
                newOuterDiv.appendChild(newInnerDiv);
            }
            container.appendChild(newOuterDiv);
        }
        subtext.textContent = "Current: " + number + " x " + number;
    }
}