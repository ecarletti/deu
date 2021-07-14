import effect_error from '../resources/sound/effect-error.mp3'
import effect_right from '../resources/sound/effect-right.mp3'
// import music_index from '../resources/sound/index.mp3'

export var config = {
    //Imagenes de Background
    INTRO_BACKGROUND: "../resources/images/introgame1.png",
    GAMEOVER_IMAGE: "../resources/images/gameover-1.jpg",
    WIN_IMAGE: "../resources/images/win-1024.jpg",
    GAME_BACKGROUND:"../resources/images/background1-1024.png",
    //Imagenes de Background

    // estado de juego
    game_status:false,

    // Puntos
    POINTS_TO_WIN: 50,
    // Puntos

    // music
    music_status: true,
    music_checked:true,
    effect_checked:true,
    // Tiempo
    TIMER: false,
    TIME_REMAINING: 60 * 5, // 5 min
    HIDDEN_OBJECT_FOUND: 25,
    HIDDEN_OBJECT_NOT_FOUND: 20,
    // Tiempo
};

export const audio_error = new Audio(effect_error);
audio_error.volume = 0.3;
export const audio_right = new Audio(effect_right);
audio_right.volume = 0.2;
