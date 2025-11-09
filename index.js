const info = document.getElementById("info");
const volpic = document.getElementById("volpic");
const myAudio = document.getElementById("sfx");
let soundplaying = true;

function openinfo(){

}

function changevolumesetting(){
    if (soundplaying){
        myAudio.pause()
        soundplaying = false;
        volpic.src="real_volume_off.png"
    }

    else{
        myAudio.play();
        soundplaying = true;
        volpic.src="real_volume_up.png"
    }
}