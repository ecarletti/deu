const numberMaxofTrash = 8;

function Trash(auxPath, auxName) {
    this.path = auxPath;
    this.name = auxName;
  }

var textArray = [
    'images/trash/monton_de_basura.png',
    'images/trash/bolsa_de_basura_1.png',
    'images/trash/cajas_rotas.png',
    'images/trash/bolsa_de_basura_2.png',
    'images/trash/cascara_de_banana.png',
    'images/trash/diarios_1.png',
    'images/trash/diarios_2.png',
    'images/trash/lata_de_gaseosa.png',
];

var altArray = [
    'Monton de basura',
    'Bolsas de basura',
    'Cajas rotas',
    'Bolsas de basura',
    'Cascara de banana',
    'Diarios y revistas rotas',
    'Revistas y diarios sucios',
    'lata de gaseosa',
]

export function createTrashes(){
    let garbage = [], aux;
    for (let index = 1; index < numberMaxofTrash; index++) {
        garbage.push(new Trash(textArray[index], altArray[index]));
    }
    return garbage;
}

function randomNumberTrash() {return (Math.floor(Math.random()*textArray.length))};

// function pathTrash(n) { return textArray[n]; }

// function descriptionTrash(n) { return altArray[n] ;}


  // crea dinamicamente: <gallery> <div><img/></div> </gallery>
  function createImgElement(){
    var newDiv = createDivGallery();
    gallery.appendChild(newDiv)
    var img = generateTrashImg();
    newDiv.appendChild(img);
  }
  

  function generateTrashImg(){
    var img = new Image(100, 100);
    var number = randomNumberTrash();
    img.id= "img_trash_" + number ;
    img.src = pathTrash(number);
    img.class="gallery__img";
    img.alt= descriptionTrash(number);
    img.onclick = linkListenerTrash;
    return img;
  }