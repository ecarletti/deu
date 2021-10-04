import view from '../views/tutorial2.html'
import win_image from '../resources/images/win-1024.jpg'
import trash1 from '../resources/images/trash/monton_de_basura.png'
import trash2 from '../resources/images/trash/bolsa_de_basura_1.png'
import trash3 from '../resources/images/trash/cajas_rotas.png'
import trash4 from'../resources/images/trash/bolsa_de_basura_2.png'
import trash5 from '../resources/images/trash/cascara_de_banana.png'
import trash6 from '../resources/images/trash/diarios_1.png'
import trash7 from '../resources/images/trash/diarios_2.png'
import trash8 from'../resources/images/trash/lata_de_gaseosa.png'

import object1 from '../resources/images/object/bicicleta-celeste.png'
import object2 from '../resources/images/object/bicicleta-rosa.png'
import object3 from '../resources/images/object/motocicleta-amarilla.png'
import object4 from '../resources/images/object/motocicleta-celeste.png'
import object5 from '../resources/images/object/perro-bulldog.png'
import object6 from '../resources/images/object/perro-pitbull.png'
import object7 from '../resources/images/object/perro-salchicha.png'
import {altObjectArray as altObject} from '../js/object'
import person from '../resources/images/tutorial.png'
import { altArray as altTrash }  from '../js/trash'



export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    var div = divElement.querySelector('#win_img')
    
    div.style.backgroundImage = "url("+person+")";
    div.style.width='1024px'
    div.style.height='728px'
    var img1 = divElement.querySelector('#trash1')
    var img2 = divElement.querySelector('#trash2')
    var img3 = divElement.querySelector('#trash3')
    var img4 = divElement.querySelector('#trash4')
    var img5 = divElement.querySelector('#trash5')
    var img6 = divElement.querySelector('#trash6')
    var img7 = divElement.querySelector('#trash7')
    var img8 = divElement.querySelector('#trash8')

    img1.src= trash1
    img1.alt= altTrash[0]
    img2.src= trash2
    img2.alt= altTrash[1]
    img3.src= trash3
    img3.alt= altTrash[2]
    img4.src= trash4
    img4.alt= altTrash[3]
    img5.src= trash5
    img5.alt= altTrash[4]
    img6.src= trash6
    img6.alt= altTrash[5]
    img7.src= trash7
    img7.alt= altTrash[6]
    img8.src= trash8
    img8.alt= altTrash[7]

    var imgO1 = divElement.querySelector('#object1')
    var imgO2 = divElement.querySelector('#object2')
    var imgO3 = divElement.querySelector('#object3')
    var imgO4 = divElement.querySelector('#object4')
    var imgO5 = divElement.querySelector('#object5')
    var imgO6 = divElement.querySelector('#object6')
    var imgO7 = divElement.querySelector('#object7')

    imgO1.src= object1
    imgO1.alt= altObject[0]
    imgO2.src= object2
    imgO2.alt= altObject[1]
    imgO3.src= object3
    imgO3.alt= altObject[2]
    imgO4.src= object4
    imgO4.alt= altObject[3]
    imgO5.src= object5
    imgO5.alt= altObject[4]
    imgO6.src= object6
    imgO6.alt= altObject[5]
    imgO7.src= object7
    imgO7.alt= altObject[6]
    
    return divElement
};