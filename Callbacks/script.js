// callback es una función que se ejecuta dentro de una función,
// no son asicronos, es decir se ejecutan por orden
// cb abreviatura de callback
const getUser=(id,cb)=>{
    const user={
        name:'Hola',
        id: id
    }
    // console.log(user);
    cb(null,user);
}

getUser(1,(err,user)=>{
    if(err)
        return console.log(err);
    console.log(`User name is ${user.name}`);
});

