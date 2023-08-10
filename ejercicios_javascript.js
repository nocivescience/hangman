const words = ["hello", "world", "how", "are", "you"];
const wordElected = words[Math.floor(Math.random() * words.length)];
const elemento=wordElected.split("").join(" ");
elemento.innerHTML+='hola';
console.log(elemento);