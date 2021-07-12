/* globals TIME_REMAINING HIDDEN_OBJECT_FOUND HIDDEN_OBJECT_NOT_FOUND randomImageBox img */
// MAIN DEL JUEGO

let timer = config.TIME_REMAINING;

function startGameTimer (display) {
  backgroundImage.style.backgroundImage = "url(" + config.GAMEBACKGROUND + ")";  
  document.getElementById('options_and_time').style.display='block'
  let minutes; let seconds;

  var intervalTimer = setInterval(function () {
    randomImages();
    if (timer == 0){
      clearInterval(intervalTimer);
      deleteAllImg();
      gameOver();
    }
    // condicion de que gano el juego

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = 'Tiempo:' + minutes + ':' + seconds

    if (--timer < 0) {
      timer = 0
      
    }

    document.getElementById('backgroundImage').onclick = function () {
      timer -= config.HIDDEN_OBJECT_NOT_FOUND
      console.log('objetos no encontrado, se restaran: ', config.HIDDEN_OBJECT_NOT_FOUND)
      console.log(timer)
    }
  }, 1000)

}



// linkListener funcion onClick de cada imagen (Basura)
function linkListenerTrash() {
  this.remove()
  timer += config.HIDDEN_OBJECT_FOUND
  console.log('objetos encontrado, se aumentaran: ', config.HIDDEN_OBJECT_FOUND)
  console.log(timer)
  countTrashItemsImg--;
}

function deleteAllImg(){
  for (var i = 0; i < 8; i++) {
    let img = document.getElementById('img'+i);
    console.log(img);
    if (img != null){ img.remove()}
 }
}