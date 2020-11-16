let numero1 = document.getElementById('calc1');
let numero2 = document.getElementById('calc2');
let result = document.getElementById('result');


const mais = document.getElementById('soma');
const menos = document.getElementById('sub');
const divi = document.getElementById('divisao');
const mult = document.getElementById('mult');
const clear = document.getElementById('clear');

mais.addEventListener('click', () => {
    result.value = Number(calc1.value) + Number(calc2.value);         
});

menos.addEventListener('click', () => {
    result.value = Number(calc1.value) - Number(calc2.value);
});

divi.addEventListener('click', () => {
    result.value = Number(calc1.value) / Number(calc2.value);
});

mult.addEventListener('click', () => {
    result.value = Number(calc1.value) * Number(calc2.value);
});

clear.addEventListener('click', () => {
    calc1.value = '' ;
    calc2.value = '' ;
    result.value = '' ;
});