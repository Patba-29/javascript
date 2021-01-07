let word='Hola mundo';
// Divide el texto en letras y llena el vector
// con las letras del texto
console.log(Array.from(word));

const letters=['a','c','b'];
const numbers=[1,8,3];
// Con el método sort ordena los elementos del vector
// console.log(letters.sort());
// console.log(numbers.sort());

// Recorrer el vector
numbers.forEach((number, index)=>
    console.log(`${number} esta en la posición ${index}`));