const list=document.getElementById('list');
const newElement=document.getElementsById('li');
newElement.textContent="soy el nuevo elemento";

// se inserta en la posición 0, es decir la primera posición del listado
list.insertBefore(newElement,list.children[0]);