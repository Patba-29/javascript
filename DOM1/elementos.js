// const list=document.getElementById('list');
// const newElement=document.getElementsById('li');
// newElement.textContent="soy el nuevo elemento";

// // se inserta en la posición 0, es decir la primera posición del listado
// list.insertBefore(newElement,list.children[1]);

const button=document.getElementById('button');

// objeto window- es el objeto global de el descienden los objetos
//     alert()      - para cosas rapidas
//     prompt()     - una línea de texto, para solicitar información
//     confirm()    - devuelve true o false en función a lo que el usuario selecciona

// se genera el evento al presionar o se puede agregar scroll
// addEventListener('click',(e)=>{
//     console.log(e);
// });
// if(confirm('Acepta')){
//     console.log('El usuario acepto');
// }else{
//     console.log('El usuario no acepto');
// }

// objetivo console -objeto que contiene la consola del navegador
//     console.log()
//     console.dir() -proporciona información detallada del elemento
//     console.error() -para imprimir errores
//     console.table() -se utiliza para información detallada


const person={
    name:'Hola',
    age:30,
    email: 'hola360@gmail.com'
}
console.log(person);
console.table(person);

// objeto location- es el objeto que contiene la barra de direcciones
// location.href   -imprime la url
// location.protocol -imprime el protocolo utilizado
// location.host     -el puerto y la dirección utilizada
// location.pathname -la ubicación de los archivos
// location.hash     -
// location.reload   -recargar la página


console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);
// location.reload();

// objeto history
//     back
//     forward
//     go(n|-n)
//     length

// objeto date
const date=new Date();
console.log(date.getDay()); //0-domingo 6-sabado

/* Timers
     setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función
     despues de delay. Si se referencia a una variable o constante se puede
     con clearTimeout(referencia) */

/* Intervalos
    setIntervalo, funciona como Timers hace que se ejecute la función cada
    delay milisegundos

*/ 

// aparece el mensaje de Hola despues de 3 segundos
// button.addEventListener('click',()=>{
//     // setTimeout(saludar,3000);
//     // se puede hacer de esta manera
//     setTimeout(()=>{
//         console.log('Adios');
//     },3000);
// });

// const saludar=()=>{
//     console.log('Hola');
// }


// Forma de parar el TimeOut
// const timeout=setTimeout(()=>{
//     console.log('Adios');
// },3000);

// button.addEventListener('click',()=>{
//     clearTimeout(timeout);
// });


// Uso de Intervalo
const saludar=()=>{
    console.log('Hola');
}
let cont=0;
const interval=setInterval(()=>{
    console.log(cont);
    cont++;
},1000);

// Parar el mensaje
button.addEventListener('click',()=>{
    clearInterval(interval);
});









