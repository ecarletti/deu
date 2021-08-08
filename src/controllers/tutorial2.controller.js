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
import {altObjectArray} from '../js/object'
import person from '../resources/images/tutorial.png'




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
    img2.src= trash2
    img3.src= trash3
    img4.src= trash4
    img5.src= trash5
    img6.src= trash6
    img7.src= trash7
    img8.src= trash8

    var imgO1 = divElement.querySelector('#object1')
    var imgO2 = divElement.querySelector('#object2')
    var imgO3 = divElement.querySelector('#object3')
    var imgO4 = divElement.querySelector('#object4')
    var imgO5 = divElement.querySelector('#object5')
    var imgO6 = divElement.querySelector('#object6')
    var imgO7 = divElement.querySelector('#object7')

    imgO1.src= object1
    imgO2.src= object2
    imgO3.src= object3
    imgO4.src= object4
    imgO5.src= object5
    imgO6.src= object6
    imgO7.src= object7
    
    return divElement
};