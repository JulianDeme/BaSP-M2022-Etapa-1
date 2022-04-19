console.log("04");

// A.

console.log("04-A");

var randomNum = Math.random();
console.log(randomNum);
if (randomNum>= 0.5) {
    console.log("Greater than 0.5");
} else {
    console.log("Lower than 0.5");
}

// B.

console.log("04-B");

var age;
age = Math.floor(Math.random() * 101);
console.log(age);
switch (true) {
    case (age < 3):
        console.log("Baby");
        break;
    case (3 <= age &&  age < 13):
        console.log("Child");
        break;
     case (13 <= age &&  age < 20):
        console.log("Teen");
        break;            
    case (20 <= age &&  age < 31):
        console.log("Young");
        break;
    case (31 <= age &&  age < 61):
        console.log("Adult");
        break;   
    case (61 <= age &&  age < 75):
        console.log("Old adult");
        break;
    case (75 <= age):
        console.log("Elder");
        break;   
    default:
        console.log("Error");
}