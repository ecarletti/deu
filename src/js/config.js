export var config = {
    //Imagenes de Background
    INTRO_BACKGROUND: "../resources/images/introgame1.png",
    GAMEOVER_IMAGE: "../resources/images/gameover-1.jpg",
    WIN_IMAGE: "../resources/images/win-1024.jpg",
    GAME_BACKGROUND:"../resources/images/background1-1024.png",
    //Imagenes de Background


    // Puntos
    POINTS_TO_WIN: 100,
    // Puntos


    // Tiempo
    TIMER: false,
    TIME_REMAINING: 60 * 5, // 5 min
    HIDDEN_OBJECT_FOUND: 25,
    HIDDEN_OBJECT_NOT_FOUND: 20,
    // Tiempo
};
// CONST
const gallery = document.getElementById('gallery')
const backgroundImage =document.getElementById('backgroundImage')
const canvas = document.getElementById('canvas')

export const audio_error = new Audio('../resources/sound/effect-error.mp3');
audio_error.volume = 0.3;
export const audio_right = new Audio('../resources/sound/effect-right.mp3');
audio_right.volume = 0.2;
export const audio_index = new Audio('../resources/sound/index.mp3');
audio_index.volume= 0.1;