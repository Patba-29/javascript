// const button=document.getElementById('button');
// evento click y se crea la función y las instrucciones 
// de lo que va a ser
/* Eventos del ratón
    click, dbclick, mouserenter,mousedown,
    mouseup

    Eventos de teclado
        keypress, keydown


*/ 
// button.addEventListener('click',()=>{
//     console.log('Evento click');
// });

const form=document.getElementById('form');
const input=document.getElementById('input');
const button=document.getElementById('button');
// input.addEventListener('keyup',(e)=>{
    // obtiene lo que se ingresa en el input
    // console.log(input.value);
    // imprime la información del evento
    // console.log(e);
// });
// EventTarget, hace referencia al punto donde se origina el evento
button.addEventListener('click',(e)=>{
    console.log(e.target);
});





