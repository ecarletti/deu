import view from '../views/game_win.html'
import win_image from '../resources/images/win-1024.jpg'




export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    var div = divElement.querySelector('#win_img')
    console.log(div)
    div.style.backgroundImage=  "url("+win_image+")"; 
    div.alt= "Imagen, festejando que la ciudad esta limpia"



    return divElement
};