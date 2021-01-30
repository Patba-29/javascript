const buttonImage=document.getElementById('button-image');
const buttonPdf=document.getElementById('button-pdf');

buttonImage.addEventListener('click',()=>{
    fetch('dog.jpg')
        .then(res=>res.blob())
        .then(img=>{
            document.getElementById('img').src=URL.createObjectURL(img)
        });
});
buttonPdf.addEventListener('click',()=>{
    fetch('Demo.pdf')
        .then(res=>res.blob())
        .then(pdf=>{
            document.getElementById('pdf').href=URL.createObjectURL(pdf);
        });
});
