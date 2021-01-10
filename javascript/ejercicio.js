class Book{
    constructor(title,author,year,gender){
        this.title=title;
        this.author=author;
        this.year=year;
        this.gender=gender;
    }
    // Función que devuelve la información del libro
    BookInfo(){
        return `${this.title} es un libro de ${this.gender}
        escrito por ${this.author} en el año ${this.year}`;
    }
}

// Pedir 3 libros y guardarlos en un array

let Books=[];
// Solicitar los 3 libros
while(Books.length<3){
    let title=prompt('Introduce el título del libro');
    let author=prompt('Introduce el autor del libro');
    let year=prompt('Introduce el año de publicación del libro');
    let gender=prompt('Introduce el genero, debe ser de fantasia, terror o aventura')
    .toLowerCase(); //no importa si se ingresa en mayuscula o minuscula
    // verifica que no existan campos vacios, que el 
    // año sea número y tenga 4 digitos y el genero
    // sea de terror, fantasia y aventura
    if(title!='' && author!='' && !isNaN(year) &&
        year.length==4 && (gender=='aventura'||
        gender=='fantasía'|| gender=='terror')){
            
            Books.push(new Book(title,author,year,gender));
        }
}

// Función que muestra todos los libros
const ShowAllBooks=()=>{
    console.log(Books);
}

// Función que muestra los nombre de autores alfabeticamente
const ShowAllAuthors=()=>{
    for(const book of Books){
        console.log(book.author)
    }
}


// llamar a la función
ShowAllBooks();