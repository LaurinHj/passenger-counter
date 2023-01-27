
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
function increment() {
    let count = document.getElementById("count-el").innerText;
    count++;
    document.getElementById("count-el").innerText = count;
}

function save() {
    prev = countEl.innerText;
    console.log(prev) 
    saveEl.textContent += prev + " - ";
    countEl.textContent = 0;
}

