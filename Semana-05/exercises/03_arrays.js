// A.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5:" , meses[4]);
console.log("Mes 11:" , meses[10]);
 
// B.

const meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses1.sort());

// C.

meses.unshift("Posicin0");
meses.push("Posición14");
console.log(meses);

// D.

meses.shift();
meses.pop();
console.log(meses);

// E.

const meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses2.reverse());

// F.

console.log(meses.join("-"));

// G.

var meses3 = meses.slice(4,10);
console.log(meses3);



