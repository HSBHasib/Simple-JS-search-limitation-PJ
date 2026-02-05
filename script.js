let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let counter = document.querySelector("span");

let maxLength = 20;
counter.textContent = maxLength;

input.addEventListener("input", function() {
    let count = maxLength - this.value.length;
    
    counter.textContent = count;

    if (count < 0) {
        h1.innerHTML = `Character limit crossed: <span id="counter">${count}</span>`;
    } else {
        h1.innerHTML = `Character left: <span>${count}</span>`;
    }
});