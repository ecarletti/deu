let layout = document.getElementById('layout');
import music_index from '../resources/sound/index.mp3'
var audio = layout.querySelector("#music");


export function music(on) {
    music_volume(0.1);
    // and music on
    if (audio.src != music_index && on) {
       
        audio.autoplay = true;
        
        audio.loop=true;
        audio.load()
        audio.addEventListener("load", function() { 
            audio.play(); 
        }, true);
        

        audio.src = music_index;
        
    }
    if (!on){ 
        audio.pause()
        audio.src= '';
    }
    // else {
    //     audio.pause()
    // }
    
}

export function music_volume(number){
    audio.volume = number;
}