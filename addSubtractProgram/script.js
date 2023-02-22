let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('counter-plus');

let countDisplay = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    countDisplay++;
});

counterMinusElem.addEventListener("click",()=>{
    countDisplay--;
});

function updateDisplay(){
    counterDisplayElem.innerHTML = countDisplay;
};