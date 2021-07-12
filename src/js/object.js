import {createDivGallery} from './grid'
import {linkListenerObject} from './points'

const numberMaxofObject = 7;

import object1 from '../resources/images/object/bicicleta-celeste.png'
import object2 from '../resources/images/object/bicicleta-rosa.png'
import object3 from '../resources/images/object/motocicleta-amarilla.png'
import object4 from '../resources/images/object/motocicleta-celeste.png'
import object5 from '../resources/images/object/perro-bulldog.png'
import object6 from '../resources/images/object/perro-pitbull.png'
import object7 from '../resources/images/object/perro-salchicha.png'

var textObjectArray = [ object1,object2,object3,object4,object5,object6,object7];

var altObjectArray = [
    'Bicicleta celeste',
    'Bicicleta rosa',
    'Moto amarilla',
    'Moto celeste',
    'Perro bulldog',
    'Perro pitbull',
    'Perro salchicha'
]

function randomNumberObject() {return (Math.floor(Math.random()*textObjectArray.length))};

function pathObject(n) { return textObjectArray[n]; }

function descriptionObject(n) { return altObjectArray[n] ;}


  // crea dinamicamente: <gallery> <div><img/></div> </gallery>
export  function createObjectImgElement(){
    var newDiv = createDivGallery();
    gallery.appendChild(newDiv)
    var img = generateObjectImg();
    newDiv.appendChild(img);
  }


  export  function generateObjectImg(){
    var img = new Image(100, 100);
    var number = randomNumberObject();
    img.id= "img_object_" + number ;
    img.src = pathObject(number);
    img.class="gallery__img";
    img.alt= descriptionObject(number);
    img.onclick = linkListenerObject;
    return img;
  }

