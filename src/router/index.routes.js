import { pages } from "../controllers/index";
import { music } from "../js/music"
let content = document.getElementById('canvas');
import {config} from '../js/config'


const router = (route) => {
    content.innerHTML = '';
    music(config.music_status);
    switch(route){
        case '':
            return content.appendChild(pages.home());
        case '#':
            return content.appendChild(pages.home());
        case '#/config':
            return content.appendChild(pages.config());
        case '#/game':
            return content.appendChild(pages.game());    
    }

};



export {router};