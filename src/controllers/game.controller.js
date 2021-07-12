import view from '../views/game.html'
import {startGamePoints} from '../js/points'
import { music } from '../js/music'
import { config } from '../js/config';

export default () => {
    config.game_status = true
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    music(false);

    // const btnClick = divElement.querySelector('#btnClick');
    // btnClick.addEventListener('click', () => { alert('click') })
    const display = divElement.querySelector('#time')
    // console.log(divElement.innerHTML)
    // console.log(divElement.querySelector('#backgroundImage'))
    startGamePoints(display, divElement)




    

    return divElement
};


