import view from '../views/tutorial1.html'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    var div = divElement.querySelector('#win_img')

    div.style.backgroundColor=  "white"; 



    return divElement
};