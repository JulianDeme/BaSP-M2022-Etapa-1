// A.

var longString , upperString;
longString = 'string con mas de diez carácteres';
console.log(longString);
upperString = longString.toUpperCase();
console.log("String en Uppercase:" , upperString);

// B.

console.log(longString);
var shortString;
shortString = longString.substring(0,5);
console.log(shortString);

// C.

console.log(longString);
shortString = longString.substring(longString.length - 3)
console.log(shortString);

// D.

console.log(longString);
upperString = longString.substring(0,1).toUpperCase() + longString.substring(1);
console.log(upperString);

// E.

console.log(longString);
var place;
place = longString.indexOf(" ");
console.log("Primer espacio en posición:" , place);

// D.
var nameString;
longString = 'julián demeglio';
place = longString.indexOf(" ");
nameString = longString.substring(0,1).toUpperCase() + longString.substring(1 , place + 1)
 + longString.substring(place + 1, place + 2).toUpperCase() + longString.substring(place + 2);   
console.log(nameString);



