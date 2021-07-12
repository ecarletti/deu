import { randomImages, decreaseCountOtherItemsImg , decreaseCountTrashItemsImg } from "./game_script"
import {config ,audio_error , audio_right} from './config'

let points_to_win = config.POINTS_TO_WIN;
let points= 0;


export function startGamePoints (display, context) {

  //  context.querySelector('#backgroundImage').style.backgroundImage = "url(" + config.GAME_BACKGROUND + ")";  
  context.querySelector('#options_and_time').style.display='block'

  if(config.game_status){ 
    var intervalTimer = setInterval(function () {
      
        randomImages();
        if (points == -50){
          clearInterval(intervalTimer);
          deleteAllImg();
          gameOver();
          config.game_status = false
        }
        if (points_to_win == points){
            clearInterval(intervalTimer);
            deleteAllImg();
            gameWin();
            config.game_status = false
        }

        window.addEventListener("hashchange", () => {
          clearInterval(intervalTimer);
          config.game_status = false
        });

        display.textContent = 'Puntos: ' + points; 

        // if (--points < 0) {
        //     localPoints = 0
          
        // }
    
    }, 1000)
}

}



// linkListener funcion onClick de cada imagen (Basura)
export function linkListenerTrash() {
  this.remove()
  if (config.effect_checked) { audio_right.play();}
  points = points + 10;
  decreaseCountTrashItemsImg();

}

export function linkListenerObject() {
    this.remove()
    if (config.effect_checked) { audio_error.play(); }
    points = points - 10;
    decreaseCountOtherItemsImg();
  
  }

function deleteAllImg(){
  for (var i = 0; i < numberMaxofTrash ; i++) {
    let img = document.getElementById('img_trash_'+i);
    console.log(img);
    if (img != null){ img.remove()}
 }

 for (var i = 0; i < numberMaxofObject; i++) {
  let img = document.getElementById('img_object_'+i);
  console.log(img);
  if (img != null){ img.remove()}
}

}