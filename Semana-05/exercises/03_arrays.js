console.log("03");

// A.

console.log("03-A");

const months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];
console.log("Month 5:" , months[4]);
console.log("Month 11:" , months[10]);
 
// B.

console.log("03-B");

const months1 = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];
console.log(months.sort());

// C.

console.log("03-C");

months.unshift("Position0");
months.push("Position14");
console.log(months);

// D.

console.log("03-D");

months.shift();
months.pop();
console.log(months);

// E.

console.log("03-E");

const months2 = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];
console.log(months2.reverse());

// F.

console.log("03-F");

console.log(months.join("-"));

// G.

console.log("03-G");

var months3 = months.slice(4,10);
console.log(months3);



