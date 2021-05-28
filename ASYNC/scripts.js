// const getName=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Patricia')
//         },1500)    
//     })
// }
// getName().then(name=>console.log(name));

const button=document.getElementById("button");
const listado=document.getElementById("listado");
// Metodo get
// button.addEventListener('click',()=>{
//     axios({
//         method:'GET',
//         url:'https://jsonplaceholder.typicode.com/users'
//     }).then(res=>{
//         const fragment=document.createDocumentFragment();
//         for(const userInfo of res.data){
//             const itemList=document.createElement('LI')
//             itemList.textContent=`${userInfo.id} - ${userInfo.name}`
//             fragment.appendChild(itemList)
//         }
//         listado.appendChild(fragment)
//     }).catch(err=>console.log(err))
// })


// metodo post

button.addEventListener('click',()=>{
    axios({
        method:'post',
        url:'https://jsonplaceholder.typicode.com/users',
        data:{
            title:'A new post',
            body:'Hola desde post con axios',
            userId:1
        }
    }).then(res=>console.log(res.data))
}).catch(res=>console.log(err)) //mostrar el error