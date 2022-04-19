// A.

var randomNum = Math.random();
console.log(randomNum);
if (randomNum>= 0.5) {
    console.log("Greater than 0.5");
} else {
    console.log("Lower than 0.5");
}

// B.

var age;
age = Math.floor(Math.random() * 101);
console.log(age);
switch (true) {
    case (age < 3):
        console.log("Bebé");
        break;
    case (3 <= age &&  age < 13):
        console.log("Niño");
        break;
     case (13 <= age &&  age < 20):
        console.log("Adolecente");
        break;            
    case (20 <= age &&  age < 31):
        console.log("Joven");
        break;
    case (31 <= age &&  age < 61):
        console.log("Adulto");
        break;   
    case (61 <= age &&  age < 75):
        console.log("Adulto mayor");
        break;
    case (75 <= age):
        console.log("Anciano");
        break;   
    default:
        console.log("Error");
}