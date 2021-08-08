import { randomImages, decreaseCountOtherItemsImg , decreaseCountTrashItemsImg , gameWin, gameOver, initGame} from "./game_script"
import {config ,audio_error , audio_right} from './config'
import anime from 'animejs/lib/anime.es.js';
import { trash, numberMaxofTrash } from '../js/trash'
import {numberMaxofObject, objects} from '../js/object'


let points_to_win = config.POINTS_TO_WIN;
let points= 0;


export function startGamePoints (display, context) {
  initGame();
  
  console.log(config.game_status)
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
          points= 0;
          return false
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
  var divId = 'div_' + this.id
  var { totalDiv, newDiv } = selectDivs(divId,'square-right','+10');
  // me quedo con el ultimo caracter de la cadena, el id del string
  trash.push(this.id.slice(-1));
  trash.sort(function() {return Math.random() - 0.5})
  this.remove();
  // obtengo el id del grid y lo seteo en vacio
  document.getElementsByClassName(this.name)[0].id = " "
  totalDiv.appendChild(newDiv)
  anime({
    targets: newDiv,
    translateY: -200,
    scale: 2,
    duration: 1500,
  });
  window.setTimeout(animateFuncion, 1500, newDiv);
  if (config.effect_checked) { audio_right.play();}
  points = points + 10;
  decreaseCountTrashItemsImg();

}

export function linkListenerObjectS(){
  alert("roman")

}


export function linkListenerObject() {
    var divId = 'div_' + this.id
    var { totalDiv, newDiv } = selectDivs(divId,'square-error','-10');
    objects.push(this.id.slice(-1));
    objects.sort(function() {return Math.random() - 0.5})
    this.remove()
    document.getElementsByClassName(this.name)[0].id = " "
    totalDiv.appendChild(newDiv)
    anime({
      targets: newDiv,
      translateY: -200,
      scale: 2,
      duration: 1500,
    });
    window.setTimeout(animateFuncion, 1500, newDiv);
    if (config.effect_checked) { audio_error.play(); }
    points = points - 10;
    decreaseCountOtherItemsImg();
  }

  function selectDivs(divId, classHtml ,points) {
    var totalDiv = document.querySelector('#' + divId);
    var newDiv = document.createElement("div");
    newDiv.className = classHtml;
    newDiv.id = classHtml;
    newDiv.innerHTML = points;
    return { totalDiv, newDiv };
  }

function deleteAllImg(){
  for (var i = 0; i < numberMaxofTrash ; i++) {
    let img = document.getElementById('img_trash_'+i);
    
    if (img != null){ img.remove()}
 }

 for (var i = 0; i < numberMaxofObject; i++) {
  let img = document.getElementById('img_object_'+i);
  
  if (img != null){ img.remove()}
}

}

function animateFuncion(totalDiv) {
  totalDiv.remove()
}