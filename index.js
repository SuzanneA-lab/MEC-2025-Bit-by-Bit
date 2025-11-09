const info = document.getElementById("info");
const myAudio = document.getElementById("sfx");
let soundplaying = true;

function openinfo(){

}

function changevolumesetting(){
    if (soundplaying){
        myAudio.pause()
        soundplaying = false;
    }

    else{
        myAudio.play();
        soundplaying = true;
    }
}