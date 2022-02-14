function outputUpdate(vol) {

    document.querySelector('#volumen').value = vol;

}
var audio = document.querySelector("#audio")
document.querySelector("#fader").addEventListener("change", () => {
    audio.volume = document.querySelector("#fader").value / 100
})

var muteBtn = document.getElementById("mute");
var pauseBtn = document.getElementById("pause");

pauseBtn.addEventListener("click", () => {

    if(audio.paused){
        audio.play()
        pauseBtn.innerHTML = "<i class='bx bx-play-circle'></i>"
    }else{
        audio.pause()
        pauseBtn.innerHTML = "<i class='bx bx-pause-circle' ></i>"
    }
})

mute.addEventListener("click", () => {

    if(audio.muted){
        audio.muted = false
        mute.innerHTML = "<i class='bx bxs-volume-full'></i>"
    }else{
        audio.muted = true
        mute.innerHTML = "<i class='bx bxs-volume-mute'></i>"
    }
})