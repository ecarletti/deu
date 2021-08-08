import view from '../views/tutorial1.html'
import person from '../resources/images/tutorial.png'


export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    var div = divElement.querySelector('#win_img')
    
    div.style.backgroundImage = "url("+person+")";
    div.style.width='1024px'
    div.style.height='728px'
     



    return divElement
};