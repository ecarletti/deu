import view from '../views/home.html'
// import anime from 'animejs/lib/anime.es.js';



export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    // var aux = divElement.querySelector('#pruebaimg')
    // console.log(aux)
    // anime({
    //     targets: aux,
    //     translateX: 250,
    //     scale: 3,
    //     duration: 3000,
    //   });

    return divElement
};