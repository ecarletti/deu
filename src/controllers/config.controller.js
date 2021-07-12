import view from '../views/config.html'
import scene from '../resources/images/background1-1024.png'


export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view

    // set map
    let sceneMap = divElement.querySelector('#sceneMap')
    sceneMap.src = scene;
    console.log(createTrashes())
    return divElement
};
