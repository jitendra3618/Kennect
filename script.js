let barsContainer = document.getElementById("bars-container");
let numberOfBars = 20; // Change the number of bars as needed

initializeBars();

function initializeBars() {
    for (let i = 0; i < numberOfBars; i++) {
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = Math.floor(Math.random() * 100) + 1 + "px";
        barsContainer.appendChild(bar);
    }
}

function randomizeArray() {
    let bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        let newValue = Math.floor(Math.random() * 100) + 1;
        bar.style.height = newValue + "px";
    });
}

function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    for (let i = 1; i < bars.length; i++) {
        let key = parseInt(bars[i].style.height);
        let j = i - 1;
        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            swap(bars[j], bars[j + 1]);
            await delay(50);
            j--;
        }
        bars[j + 1].style.height = key + "px";
    }
}

// Implement other sorting functions similarly

function changeSize() {
    let bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        let newSize = Math.floor(Math.random() * 100) + 1;
        bar.style.height = newSize + "px";
    });
}
