let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
let btn = document.querySelector('.submit');


let isValid = true;

let weight_err = document.querySelector('.weight_err');
let height_err = document.querySelector('.height_err');
let result = document.querySelector('.result');

btn.addEventListener('click',function(){
    if(weight.value==''){
        weight_err.innerText = 'weight field is required';
        isValid = false;
    }
    if(isNaN(weight)){
        weight_err.innerText = 'weight requires a number';
        isValid = false;
    }
    if(height.value==''){
        height_err.innerText = 'height field is required';
         isValid = false;
    }else if(isNaN(height)){
        height_err.innerText = 'height requires a number';
        isValid = false;
    }
    if(isValid){
        let bmi = weight.value / (height.value * height.value);
        result.innerText = `${bmi}kg`;
    }

})