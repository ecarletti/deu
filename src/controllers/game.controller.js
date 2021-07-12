import view from '../views/game.html'
import {startGamePoints} from '../js/points'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view

    // const btnClick = divElement.querySelector('#btnClick');
    // btnClick.addEventListener('click', () => { alert('click') })
    const display = divElement.querySelector('#time')
    // console.log(divElement.innerHTML)
    // console.log(divElement.querySelector('#backgroundImage'))
    startGamePoints(display, divElement)




    

    return divElement
};


