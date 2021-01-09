/** DOM Crear elemenentos 
 * Crear un elemento: document.createElement(element)
 * Escribir un texto en un elemento: element.textContent = texto
 * Escribir HTML en un elemento: element.innerHTML= código HTML
 * añadir un elemento al DOM: parent.appendChild(element)
 * Fragmentos de código: document.CreateDocumentFragment()
*/

const days=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado',
            'Domingo'];
const title=document.getElementById('title');
const daysList=document.getElementById('daysList');
const daysSelect=document.getElementById('daysSelect');

// const itemList=document.createElement('LI');
// itemList.textContent='Lunes';
// crear itemList a li y mostrarlo

// daysList.appendChild(itemList);
// console.log(itemList);
const fragment=document.createDocumentFragment();
for(const day of days){
    const itemList=document.createElement('LI');
    itemList.textContent=day;
    fragment.appendChild(itemList);
}
// Agregar los item al listadome
daysList.appendChild(fragment);

const fragment1=document.createDocumentFragment();
for(const day of days){
    const itemSelect=document.createElement('OPTION');
    // no se envian datos con mayusculas
    itemSelect.setAttribute('value',day.toLocaleLowerCase()); 
    itemSelect.textContent=day;
    fragment1.appendChild(itemSelect);
}
daysSelect.appendChild(fragment1);

console.log(fragment1);
// console.log(fragment);