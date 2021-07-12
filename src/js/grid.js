var stack = [];
// devuelve un numero entre el min y max
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

export function createDivGallery(){
    var newDiv = document.createElement("div");
    if (stack.length == 0){ createStack()};
    // con la pila me aseguro que no hay valores repetidos
    newDiv.className='gallery__item gallery__item--' + stack.pop();
    // console.log(stack);
    return newDiv;
  }


function createStack(){
  // creo una pila con las posiciones del grid para que no se repitan de 1..27
  for (var i = 1; i < 27; i++) { stack.push(i) }
  // las desordeno aleatoriamente
  stack.sort(function() {return Math.random() - 0.5})
}