/* Protocolos HTTP
*/

const button=document.getElementById('button');

button.addEventListener('click',()=>{
    //  por eso se llama xhr el objeto es un XMLHttpRequest
    // verifica si el explorador soporta XMLHttpRequest, verifica si el navegador es antiguo
    let xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    /*se abre la petición, ingresando el metodo y la url*/
    xhr.open('GET','https://jsonplaceholder.typicode.com/users'); 
    /* obtiene lo que se esta obteniendo al realizar la petición*/
    xhr.addEventListener('load',(data)=>{
        const dataJSON=JSON.parse(data.target.response); //se convierte a json la información obtenida
        // console.log(dataJSON) imprime la información obtenida; 
        const list=document.getElementById('list'); //se obtiende el ul de html
        for(const userInfo of dataJSON){ //recorre la información del json
            const listItem=document.createElement('LI'); //se crea un item con la etiqueta li
            listItem.textContent=`${userInfo.id} - ${userInfo.name}`; // se obtiene el id y nombre del usuario
            list.appendChild(listItem); //agrega el item al listado
        }
    });
    xhr.send();
});