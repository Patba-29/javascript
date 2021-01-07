// Atributos
//     element.getAttribute('attribute')
//     element.setAttribute('attribute', value)

// Clases
//     element.classList.add('class','class',...)
//     element.classList.remove('class','class',...)
//     element.classList.toggle('class','class',...)
//     element.classList.contains('class','class',...)
//     element.classList.replace('class','class',...)

// atributos directos
//     id
//     value

const title=document.getElementById('title');
const nameInp=document.getElementById('name');


// console.log(name.getAttribute('type')); //imprime el tipo de dato a ingresar en el input
// cambia el valor del atributo por text a number
nameInp.setAttribute('type','number'); 
// Agregar clases a un elemento
title.classList.add('main-title');
// Remover una clase
title.classList.remove('main-title');
// Verificar si el elemento tiene una clase
if(title.classList.contains('title'))
    console.log('Existe la clase title');
else
    console.log('No exite la clase title');
// Con replace, se reemplaza la clase





console.log(title);