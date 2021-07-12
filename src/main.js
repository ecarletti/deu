import "./style/main.sass"
import "./style/grid.sass"
import "./style/config.sass"

import {router} from './router/index.routes'


const init = () => {
    router(window.location.hash);
  
    window.addEventListener("hashchange", () => {
      router(window.location.hash);
    });
  };
  
window.addEventListener("load", init);