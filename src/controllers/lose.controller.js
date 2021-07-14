import view from '../views/game_lose.html'
import lose_image from '../resources/images/gameover-1.jpg'




export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    var div = divElement.querySelector('#win_img')
    console.log(div)
    div.style.backgroundImage=  "url("+lose_image+")"; 
    div.alt= "Imagen, festejando que la ciudad esta limpia"



    return divElement
};