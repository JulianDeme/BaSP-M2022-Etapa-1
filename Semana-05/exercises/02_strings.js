console.log("02");

// A.

console.log("02-A");

var longString , upperString;
longString = 'String with more than 10 words';
console.log(longString);
upperString = longString.toUpperCase();
console.log("String in Uppercase:" , upperString);

// B.

console.log("02-B");

console.log(longString);
var shortString;
shortString = longString.substring(0,5);
console.log(shortString);

// C.

console.log("02-C");

console.log(longString);
shortString = longString.substring(longString.length - 3);
console.log(shortString);

// D.

console.log("02-D");

console.log(longString);
upperString = longString.substring(0,1).toUpperCase() + longString.substring(1);
console.log(upperString);

// E.

console.log("02-E");

console.log(longString);
var place;
place = longString.indexOf(" ");
console.log("First \"space\" in position:" , place);

// F.

console.log("02-F");

var nameString;
longString = 'julián demeglio';
place = longString.indexOf(" ");
nameString = longString.substring(0,1).toUpperCase() + longString.substring(1 , place + 1).toLowerCase()
 + longString.substring(place + 1, place + 2).toUpperCase() + longString.substring(place + 2).toLowerCase();   
console.log(nameString);



