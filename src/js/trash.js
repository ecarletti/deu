import {createDivGallery} from './grid'
import {linkListenerTrash} from './points'
import trash1 from '../resources/images/trash/monton_de_basura.png'
import trash2 from '../resources/images/trash/bolsa_de_basura_1.png'
import trash3 from '../resources/images/trash/cajas_rotas.png'
import trash4 from'../resources/images/trash/bolsa_de_basura_2.png'
import trash5 from '../resources/images/trash/cascara_de_banana.png'
import trash6 from '../resources/images/trash/diarios_1.png'
import trash7 from '../resources/images/trash/diarios_2.png'
import trash8 from'../resources/images/trash/lata_de_gaseosa.png'

export var trash= [0,1,2,3,4,5,6,7]

export const numberMaxofTrash = 8;

var textArray = [ trash1,trash2,trash3,trash4,trash5,trash6,trash7,trash8 ];

export var altArray = [
    'Monton de basura',
    'Bolsas de basura',
    'Cajas rotas',
    'Bolsas de basura',
    'Cascara de banana',
    'Diarios y revistas rotas',
    'Revistas y diarios sucios',
    'lata de gaseosa',
]

function randomNumberTrash() {return (Math.floor(Math.random()*textArray.length))};

function pathTrash(n) { return textArray[n]; }

function descriptionTrash(n) { return altArray[n] ;}


  // crea dinamicamente: <gallery> <div><img/></div> </gallery>
export function createImgElement(){
    var newDiv = createDivGallery()
    trash.sort(function() {return Math.random() - 0.5})
    var number = trash.pop();
    newDiv.id = "div_img_trash_" + number ;
    gallery.appendChild(newDiv)
    var img = generateTrashImg(number, newDiv.className);
    newDiv.appendChild(img);
  }
  

 export  function generateTrashImg(number, className){
    var img = new Image(100, 100);
    img.id= "img_trash_" + number ;
    img.src = pathTrash(number);
    img.class="gallery__img";
    img.name= className
    img.alt= descriptionTrash(number);
    img.onclick = linkListenerTrash;
    return img;
  }

