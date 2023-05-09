const imgHTML= document.querySelector ("#imagen1");

const IMG_1= "https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg";
const IMG_2="https://okdiario.com/img/2021/04/20/curiosidades-sobre-los-gatos-domesticos-635x358.jpg";
const IMG_3="https://misanimales.com/wp-content/uploads/2021/05/burros-miran-camara-640x800.jpg";

let number=0

function clickImagen(number){
    if (number == 1) {
        imgHTML.src= IMG_1;
    } else if (number==2) {
        imgHTML.src=IMG_2
    }   else if (number==3) {
        imgHTML.src=IMG_3
    } else {
        alert ("error");
    }
    
}