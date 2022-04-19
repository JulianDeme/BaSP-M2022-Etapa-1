// A.

function sumaV1(num1, num2) {
    return num1 + num2;
}

var num1 , num2, tot;
num1 = 32;
num2 = 21;
console.log(num1, num2);
tot = sumaV1(num1,num2);
console.log(tot);

// B.

function numValidation (num1, num2) {
    if (isNaN(num1) && isNaN(num2)) {
        alert("Los parámetros no son números");
        return false;
    } else if (isNaN(num1)) {
        alert("El parámetro \"" + num1 + "\" no es un número");
        return isNaN(num1);
    } else if (isNaN(num2)) {
        alert("El parámetro \"" + num2 + "\" no es un número");
        return isNaN(num2);
    }    
}

function sumaV2(num1, num2) {
    numValidation(num1,num2);
    return num1 + num2;
}

num1 = 25;
num2 = 65;
console.log(num1, num2);
tot = sumaV2(num1,num2);
console.log(tot);

// C.

function validateIntegerV1 (num) {  
    return Number.isInteger(num);  
}

// D.

function validateIntegerV2 (num) {  
    if (!Number.isInteger(num)) {
        alert ("Número \"" + num + "\" no es entero");
        return Math.round(num);
    } 
}

// E.

function sumaV3(num1, num2) {
    numValidation(num1,num2);
    return validateIntegerV2(num1) + validateIntegerV2(num2);
}

num1 = 24.03;
num2 = 22.75;
console.log(num1, num2);
tot = sumaV3(num1,num2);
console.log(tot);







