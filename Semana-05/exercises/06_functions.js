console.log("06");

// A.

console.log("06-A");

function AdditionV1(num1, num2) {
    return num1 + num2;
}

var num1 , num2, tot;
num1 = 32;
num2 = 21;
console.log(num1, num2);
tot = AdditionV1(num1,num2);
console.log(tot);

// B.

console.log("06-B");

function numValidation (num1, num2) {
    if (isNaN(num1) && isNaN(num2)) {
        alert("The parameters are not numbers");
        return false;
    } else if (isNaN(num1)) {
        alert("The parameter \"" + num1 + "\" is not a number");
        return isNaN(num1);
    } else if (isNaN(num2)) {
        alert("The parameter \"" + num2 + "\" is not a number");
        return isNaN(num2);
    }    
}

function AdditionV2(num1, num2) {
    numValidation(num1,num2);
    return num1 + num2;
}

num1 = 25;
num2 = 65;
console.log(num1, num2);
tot = AdditionV2(num1,num2);
console.log(tot);

// C.

console.log("06-C");

function validateIntegerV1 (num) {  
    return Number.isInteger(num);  
}

// D.

console.log("06-D");

function validateIntegerV2 (num) {  
    if (!Number.isInteger(num)) {
        alert ("Number \"" + num + "\" in not an integer");
        return Math.round(num);
    } 
}

// E.

console.log("06-E");

function AdditionV3(num1, num2) {
    numValidation(num1,num2);
    return validateIntegerV2(num1) + validateIntegerV2(num2);
}

num1 = 24.03;
num2 = 22;
console.log(num1, num2);
tot = AdditionV3(num1,num2);
console.log(tot);







