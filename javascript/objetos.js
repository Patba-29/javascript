const person={
    name:'Juan',
    age:26,
    sons:['Laura','Diego']
}
console.log(person);
console.log(person.name);
console.log(person['name']);

for(const key in person){
    console.log(person[key]);
}
for(const son of person.sons){
    console.log(son);
}

// function saludar(){
//     console.log("Hola");
// }

// const saludar=()=>console.log("Hola");

const saludarUsuario=(user)=>console.log(`Hola ${user}`);
/* llamar a la función*/
saludarUsuario('Pepe');

