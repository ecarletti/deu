import view from '../views/game.html'
import loader from '../views/loader.html'
import {startGamePoints} from '../js/points'
import { music, music_volume } from '../js/music'
import { config } from '../js/config';
import { effect_controller,music_controller } from './config.controller'


export default () => {
    config.game_status = true
    const divElement = document.createElement('div')
    divElement.innerHTML = view

    let config_music = divElement.querySelector('#config_music')
    config_music.checked = config.music_checked;
    music_controller(config_music);

    let config_effect_sound = divElement.querySelector('#config_effect_sound')
    config_effect_sound.checked = config.effect_checked;
    effect_controller(config_effect_sound);

   
    music_volume(0.02);

    const display = divElement.querySelector('#time')
    config.game_status= true
    startGamePoints(display, divElement)

    return divElement
};


