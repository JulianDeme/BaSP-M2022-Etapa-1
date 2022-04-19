// A.

var longString , upperString;
longString = 'String con mas de diez carácteres';
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