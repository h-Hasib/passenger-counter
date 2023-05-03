let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let counter = 0;

function increment(){
    counter += 1;
    countEl.textContent = counter;
}
function save(){
    outputStr = counter + " - ";
    saveEl.textContent += outputStr;

    counter = 0;
    countEl.textContent = counter;
}