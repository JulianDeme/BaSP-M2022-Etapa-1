// A.

const palabras = ["palabra1", "palabra2", "palabra3", "palabra4", "palabra5"];

for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i])
  }


// B.

var palabrasMod;
for (let i = 0; i < palabras.length; i++) {
    palabrasMod = palabras[i].substring(0,1).toUpperCase() + palabras[i].substring(1);
    alert(palabrasMod)
  }

// C.

var sentence = '';
for (let i = 0; i < palabras.length; i++) {
    sentence = sentence + palabras[i];
  }
alert(sentence);

// D.

const palabrasVacio = [];
for (let i = 0; i < 10; i++) {
    palabrasVacio[i] = i;
  }
  console.log(palabrasVacio);


