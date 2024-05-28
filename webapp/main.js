let counter = 0;

function updateDisplay() {
    document.getElementById('counter').innerHTML = counter;
}

function increase() {
    counter++;
    updateDisplay();
}

function decrease() {
    counter--;
    updateDisplay();
}

function reset() {
    counter = 0;
    updateDisplay();
}


document.getElementById('increase').addEventListener('click', increase);
document.getElementById('decrease').addEventListener('click', decrease);
document.getElementById('reset').addEventListener('click', reset);

updateDisplay();