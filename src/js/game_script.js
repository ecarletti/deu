import { createImgElement } from './trash'
import { createObjectImgElement } from './object'

// Vars

export var countTrashItemsImg = 0;
export var countOtherItemsImg = 0;

// gameState();

/* 
  ---------------------------------------------
*/

export function gameState() {
  document.getElementById('options_and_time').style.display='none';
  backgroundImage.style.backgroundImage = "url(" + config.INTRO_BACKGROUND + ")";  
  addButton(backgroundImage,'Siguiente');

}


export function gameOver(){
  document.getElementById('options_and_time').style.display='none';
  console.log("LOSE")
  backgroundImage.style.backgroundImage = "url("+ config.GAMEOVER_IMAGE +")";  
}


export function gameWin(){
  document.getElementById('options_and_time').style.display='none';
  console.log('WIN');
  backgroundImage.style.backgroundImage = "url("+ config.WIN_IMAGE +")";  
}



// Function for displaying images randomly
export  function randomImages () {
  // maximo 3 imagenes al mismo tiempo
  if (countTrashItemsImg < 3)
    { 
      countTrashItemsImg++;
      createImgElement();
    }
   if (countOtherItemsImg < 3)
     {
      countOtherItemsImg++;
      createObjectImgElement();
     }
}


export function addButton(htmlID, texto) { 
  var button = document.createElement('button'); 
  button.type = 'button'; 
  button.innerText = texto; 
  // button.classList.add("btn_font");
  //button.classList.add("btn-sm"); 
  button.classList.add("right_bottom")
  button.onclick = stepNext;
  htmlID.appendChild(button); 
} 

export function decreaseCountTrashItemsImg(){
  countTrashItemsImg--;
}

export function decreaseCountOtherItemsImg(){
  countOtherItemsImg--
}

export function stepNext(){
  this.remove();
  const display = document.querySelector('#time')
  // if (config.TIMER){ startGameTimer(display) }
  // else { 
  startGamePoints(display) 
  // }

}
