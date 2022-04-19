console.log("05");

// A.

console.log("05-A");

const words = ["word1", "word2", "word3", "word4", "word5"];
for (let i = 0; i < words.length; i++) {
    alert(words[i]);
  }


// B.

console.log("05-B");

var wordsMod;
for (let i = 0; i < words.length; i++) {
  wordsMod = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    alert(wordsMod);
  }

// C.

console.log("05-C");

var sentence = '';
for (let i = 0; i < words.length; i++) {
    sentence = sentence + words[i];
  }
alert(sentence);

// D.

console.log("05-D");

const wordsEmpty = [];
for (let i = 0; i < 10; i++) {
  wordsEmpty[i] = i;
  }
  console.log(wordsEmpty);


