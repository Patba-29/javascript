/*
    fetch API
        proporciona una interfaz javascript para acceder
        y manipular partes del canal HTTP
    se utiliza para hacer peticiones a API's,
    peticiones a los servidores
*/ 

// verificar que el navegador soporte fetch
// if(window.fetch!=undefined)
    //     console.log("Fetch es soportado");
    // else
    //     console.log("Fetch no es soportado");
// const button=document.getElementById("button");
// button.addEventListener('click',()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res=>res.ok?Promise.resolve(res):Promise.reject(res))
//             //.then(res=>console.log(res));
//             // imprimir los datos en formato json que devuelve la api
//             .then(res=>res.json())
//             // .then(res=>console.log(res));
//             .then(res=>{
//                 const list=document.getElementById("list");
//                 const fragment=document.createDocumentFragment();
//                 for(const UserInfo of res){
//                     const itemList=document.createElement("LI");
//                     itemList.textContent=`${UserInfo.id}-${UserInfo.name}`;
//                     fragment.appendChild(itemList);
                    
//                 }
//                 list.appendChild(fragment);
//             });
// });


// PETICIONES FETCH CON EL METODO POST
// para hacer peticiones post, admite un segundo
// parámetro
// fetchUrl{
//         method:post 
//         body: Los datos que enviamos. Si es un objeto hay que
//         convertirlo con JSON(stringify(datos)),
//         Headers:{
//             cabeceras de información sobre lo que estamos enviando

//         }

const button=document.getElementById("button");
button.addEventListener('click',()=>{
    const newPost={
        title:'A new post',
        body:'Hola desde javascript, utilizando fetch con el método post',
        userID:1
    }
    // console.log(newPost);
    // pasarlo a formato JSON
    // console.log(JSON.stringify(newPost));
    
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'post',
    body:JSON.stringify(newPost),
    headers:{
        // indicar el tipo de archivo que se envia, en este caso es json
        "content-type":"application/json",
    }
}).then(res=>res.json()) //la respuesta se pueda interpretar
.then(data=>console.log(data));




});


