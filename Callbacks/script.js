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

const users=[
    {
        id:1,
        name:'Dorian'
    },
    {
        id:2,
        name:'Laura'
    },
    {
        id:3,
        name:'Carlos'
    }
];

const emails=[
    {
        id:1,
        email:'dorian@gmail.com'
    },
    {
        id:2,
        email:'laura23@gmail.com'
    }
];


