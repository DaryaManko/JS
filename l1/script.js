const container = document.querySelector('.container');
const inputs = container.querySelectorAll('input');
const calculateBtn = document.querySelector('.btn');
const addBtn = document.querySelector('.addBtn');
const removeBtn = document.querySelector('.removeBtn');
const sumElement = document.querySelector('#sum-value');
const maxElement = document.querySelector('#max-value');
const minElement = document.querySelector('#min-value');
const avgElement = document.querySelector('#avg-value');

const calculate = () => {
    let sum = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let count = 0;

    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (value!== null && value === value) {
            sum += value;
            min = Math.min(min, value);
            max = Math.max(max, value);
            count++;
        }
    });

    const avg = sum / count;

    sumElement.textContent = sum.toFixed(2);
    maxElement.textContent = max.toFixed(2);
    minElement.textContent = min.toFixed(2);
    avgElement.textContent = avg.toFixed(2);
};

const addInput = () => {
    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Enter a number";
    container.appendChild(input);
    inputs = container.querySelectorAll('input');
};

const removeInput = () => {
    if (inputs.length > 1) {
        container.removeChild(container.lastChild);
        inputs = container.querySelectorAll('input');
        calculate();
    }
};

inputs.forEach(input => input.addEventListener('input', calculate));
calculateBtn.addEventListener('click', calculate);
addBtn.addEventListener('click', addInput);
removeBtn.addEventListener('click', removeInput);