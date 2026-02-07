let input = document.querySelector("input");
let span = document.querySelector("span");
let h1 = document.querySelector("h1");

let maxLength = 20;
span.textContent = maxLength;

input.addEventListener("input", function(dets) {
    console.log(input.value.length);

    inputLength = input.value.length;
    let counter = span.textContent = maxLength - inputLength;
    
    if(inputLength > maxLength) {
        // h1.innerHTML = `Character limit crossed : <span style="color: red;">${counter}</span>`;
        // span.style.color = "red";

        h1.innerHTML = `Character limit crossed : <span style="color: red";>${counter}</span>`;
        // span.setAttribute("id", "count-color");
    } else {
        h1.textContent = `Character left : ${counter}`
    }
    
});