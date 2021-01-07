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
const selectDays=document.getElementById('daysSelect');

const itemList=document.createElement('LI');
itemList.textContent='Lunes';
// crear itemList a li y mostrarlo

daysList.appendChild(itemList);

console.log(itemList);