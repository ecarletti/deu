import { createImgElement } from './trash'
import { createObjectImgElement } from './object'

// Vars

export var countTrashItemsImg = 0;
export var countOtherItemsImg = 0;

export function initGame(){
  countTrashItemsImg = 0;
  countOtherItemsImg = 0;
}



export function gameOver(){
  window.location.hash = '#/game/lose';
}


export function gameWin(){
  window.location.hash = '#/game/win';
}



// Function for displaying images randomly
export  function randomImages () {
  // maximo 3 imagenes al mismo tiempo
  if (countTrashItemsImg < 2)
    { 
      countTrashItemsImg++;
      createImgElement();
    }
   if (countOtherItemsImg < 2)
     {
      countOtherItemsImg++;
      createObjectImgElement();
     }
}




export function decreaseCountTrashItemsImg(){
  countTrashItemsImg--;
}

export function decreaseCountOtherItemsImg(){
  countOtherItemsImg--
}


