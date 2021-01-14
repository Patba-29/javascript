const form=document.getElementById('form');
const characters=document.getElementById('characters');
const table=document.getElementById('table');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    // para que imprima el valor del atributo value
    getData(characters.children[characters.selectedIndex].value);
});

const getData=(id)=>{
    let xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    // se verifica que no se haya cargado la pagina
    if(id==undefined){
        // lo que hace este bloque de codigo es mostrar la información
        // en el select
        // se agrega el método y el archivo
        xhr.open('GET','conexion.php');
        // al presionar sobre el boton con el evento addEventListener
        xhr.addEventListener('load', (data) => {
            const dataJSON=JSON.parse(data.target.response);
            console.log(dataJSON);
            const fragment=document.createDocumentFragment();
            for(const usuarios of dataJSON){
                // se crea el elemento option del select
                const option=document.createElement('option');
                // agrega el id del usuario, tiene que estar escrito a como esta 
                // en la base de datos
                option.setAttribute('value',usuarios.id_usuario);
                option.textContent=usuarios.name + ' '+ usuarios.lastname;
                fragment.append(option);
            }
            // se agrega los options al select
            characters.appendChild(fragment);
        });

    }else{
        xhr.open('GET',`conexion.php?id_usuario=${id}`)
        xhr.addEventListener('load',(data) =>{
            const dataJSON=JSON.parse(data.target.response);
            // console.log(dataJSON);

            const fragment=document.createDocumentFragment();
            for(const usuarios of dataJSON){
                const row=document.createElement('TR');
                const dataName=document.createElement('TD');
                const dataLastName=document.createElement('TD');
                const dataAddress=document.createElement('TD');
                const dataTelephone=document.createElement('TD');
                const dataEmail=document.createElement('TD');
                dataName.textContent=usuarios.name;
                dataLastName.textContent=usuarios.lastname;
                dataAddress.textContent=usuarios.address;
                dataTelephone.textContent=usuarios.telephone;
                dataEmail.textContent=usuarios.email;
                row.appendChild(dataName);
                row.appendChild(dataLastName);
                row.appendChild(dataAddress);
                row.appendChild(dataTelephone);
                row.appendChild(dataEmail);
                fragment.append(row);
            }
            // con el if se verifica si existe un registro en la tabla
            // si existe se borra y se agrega la nueva fila
            if(table.children[1]){
                table.removeChild(table.children[1]);
            }
            table.appendChild(fragment);
        })

    }
    // envia la información obtenida
    xhr.send();
}
// se ejecuta la función
getData();