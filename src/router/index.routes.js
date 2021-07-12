import { pages } from "../controllers/index";
let content = document.getElementById('canvas');


const router = (route) => { 
    content.innerHTML = '';
    switch(route){
        case '':
            return content.appendChild(pages.home());
        case '#/config':
            return content.appendChild(pages.config());
        case '#/game':
            return content.appendChild(pages.game());    
    }

};

export {router};