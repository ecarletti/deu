import { randomImages, decreaseCountOtherItemsImg , decreaseCountTrashItemsImg } from "./game_script"
import {config ,audio_error , audio_right} from './config'

let points_to_win = config.POINTS_TO_WIN;
let points= 0;


export function startGamePoints (display, context) {

  //  context.querySelector('#backgroundImage').style.backgroundImage = "url(" + config.GAME_BACKGROUND + ")";  
  context.querySelector('#options_and_time').style.display='block'


  var intervalTimer = setInterval(function () {
    randomImages();
    if (points == -50){
      clearInterval(intervalTimer);
      deleteAllImg();
      gameOver();
    }
    if (points_to_win == points){
        clearInterval(intervalTimer);
        deleteAllImg();
        gameWin();
    }

    display.textContent = 'Puntos: ' + points; 

    // if (--points < 0) {
    //     localPoints = 0
      
    // }

  }, 1000)

}



// linkListener funcion onClick de cada imagen (Basura)
export function linkListenerTrash() {
  this.remove()
  let aux = new Audio('../resources/sound/effect-error.mp3');
  aux.play();
  audio_right.play();
  console.log(audio_right)

  points = points + 10;
  decreaseCountTrashItemsImg();
  //countTrashItemsImg--;

}

export function linkListenerObject() {
    this.remove()
    audio_error.play();
    points = points - 10;
    // countOtherItemsImg--;
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