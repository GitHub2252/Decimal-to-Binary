'use strict';

// Select all needed element
let result = document.querySelector('#result');
let converter = document.querySelector('#converter');

converter.addEventListener('click', (e)=> {
    e.preventDefault();
    let userInput = document.querySelector('#user-input').value;
    
    if(userInput === '') {
        alert('Please input a value!');
    } else if(userInput < 0) {
        alert('Please input a positive number');
    } else {
        let binary = Number(userInput).toString(2);
        result.value = binary;
    }

})