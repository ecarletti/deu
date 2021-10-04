import view from '../views/config.html'
import scene from '../resources/images/background1-1024.png'
import { config } from '../js/config';
import { music } from '../js/music'


export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view

    // set map
    let sceneMap = divElement.querySelector('#sceneMap')
    sceneMap.src = scene;

    let config_music = divElement.querySelector('#config_music')
    config_music.checked = config.music_checked;
    music_controller(config_music);

    let config_effect_sound = divElement.querySelector('#config_effect_sound')
    config_effect_sound.checked = config.effect_checked;
    effect_controller(config_effect_sound);


    return divElement
};

export function effect_controller(config_effect_sound) {
    config_effect_sound.addEventListener('click', () => {
        if (config.effect_checked) {
            config.effect_checked = false;
            config_effect_sound.setAttribute("aria-checked", "false")
        }
        else {
            config.effect_checked = true;
            config_effect_sound.setAttribute("aria-checked", "true")
        }
    });
}

export function music_controller(config_music) {
    config_music.addEventListener('click', () => {
        if (config.music_status) {
            config.music_status = false;
            music(config.music_status);
            config.music_checked = false;
            config_music.setAttribute("aria-checked", "false")
        }
        else {
            config.music_status = true;
            music(config.music_status);
            config.music_checked = true;
            config_music.setAttribute("aria-checked", "true")
        }
    });
}

