// callback es una función que se ejecuta dentro de una función,
// no son asicronos, es decir se ejecutan por orden
// cb abreviatura de callback
// const getUser=(id,cb)=>{
//     const user={
//         name:'Hola',
//         id: id
//     }
//     // console.log(user);
//     if(id==2) cb('El usuario no existe');
//     else
//     cb(null,user);
// }

// getUser(1,(err,user)=>{
//     if(err)
//         return console.log(err);
//     console.log(`User name is ${user.name}`);
// });

// const users=[
//     {
//         id:1,
//         name:'Dorian'
//     },
//     {
//         id:2,
//         name:'Laura'
//     },
//     {
//         id:3,
//         name:'Carlos'
//     }
// ];

// const emails=[
//     {
//         id:1,
//         email:'dorian@gmail.com'
//     },
//     {
//         id:2,
//         email:'laura23@gmail.com'
//     }
// ];

const users=[
    {
        id:1,
        name:'Dorian'
    },{
        id:2,
        name:'Laura'
    },
    {
        id:3,
        name:'Carlos'
    }
]

const emails=[
    {
        id:1,
        email:'dorian@gmail.com'
    },
    {
        id:2,
        email:'laura@gmail.com'
    },
]

const getUser=(id,cb)=>{
    const user=users.find(user=>user.id==id)
    if(!user) cb(`No existe el usuario con el id ${id}`)
    else cb(null,user)
}

const getEmail=(id,cb)=>{
    const email=emails.find(email=>email.id==id)
    if(!email) cb(`No existe el email del usuario con el id ${id}`)
    else cb(null,{
        id: user.id,
        name:user.name,
        email:user.email
    })
}

getUser(1,(err,user)=>{
    if(err) return console.log(err)
    getEmail(user,(err,res)=>{
        if(err) return console.log(err)
        console.log(res)
    })
});



