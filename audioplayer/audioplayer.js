// get the audio, volume and seekbar elements
var audio = document.getElementById("audioaudio");
var volumeRange = document.getElementById("volume");
var seekbar = document.getElementById('seekbar');
var btnPlay = document.getElementById("btnPlay");

window.onload = function () {
    // getduration();
    audio.addEventListener('timeupdate', UpdateTheTime, false);
    audio.addEventListener('durationchange', SetSeekBar, false);
    volumeRange.value = audio.volume;
    // PlayNow();
}


function getduration() {
    var sec = document.getElementById("audioaudio").duration;
    sec = sec % 3600;
    var min = Math.floor(sec / 60);
    sec = Math.floor(sec % 60);
    if (sec.toString().length < 2) sec = "0" + sec;
    if (min.toString().length < 2) min = "0" + min;
    if (sec.toString() == "NaN") sec = "00";
    if (min.toString() == "NaN") min = "00";
    document.getElementById('endtime').innerHTML = min + ":" + sec;
}

// fires when volume element is changed


// fires when page loads, it sets the min and max range of the video
function SetSeekBar() {
    seekbar.min = 0;
    seekbar.max = audio.duration;
}

// fires when seekbar is changed
function ChangeTheTime() {
    audio.currentTime = seekbar.value;
}

function UpdateTheTime() {
    var sec = audio.currentTime;
    var dodai = parseInt(audio.duration);

    if (audio.paused) {
        btnPlay.innerHTML = "<i class='material-icons'>play_arrow</i>";
    } 
    else {
        btnPlay.innerHTML = "<i class='material-icons'>pause</i>";
    }

    var h = Math.floor(sec / 3600);
    sec = sec % 3600;
    var min = Math.floor(sec / 60);
    sec = Math.floor(sec % 60);

    if (sec.toString().length < 2) sec = "0" + sec;
    if (min.toString().length < 2) min = "0" + min;

    document.getElementById('lblTime').innerHTML = min + ":" + sec;
    seekbar.min = audio.startTime;
    seekbar.max = audio.duration;
    seekbar.value = audio.currentTime;
    getduration();
}


// fires when Play button is clicked
function PlayNow() { 
    // getduration();
    if (audio.paused) {
        audio.play();
        btnPlay.innerHTML = "<i class='material-icons'>pause</i>";
        console.log("play");
    }
    else if (audio.ended) {
        audio.currentTime = 0;
        audio.play();
    }
    else if(audio.play) {
        audio.pause();
        btnPlay.innerHTML = "<i class='material-icons'>play_arrow</i>";
        console.log("pause");
    }
}
// fires when Pause button is clicked
function PauseNow() {
    if (audio.play) {
        audio.pause();
    }
}
var tempp = false;
function ChangeVolume() {
    var myVol = volumeRange.value;
    document.getElementById("audioaudio").volume = myVol;
    if (myVol == 0) {
        document.getElementById("audioaudio").muted = true;
        document.getElementById("volumev").innerHTML = "<i class='material-icons'>volume_mute</i>"
    } else {
        document.getElementById("audioaudio").muted = false;
        document.getElementById("volumev").innerHTML = "<i class='material-icons'>volume_down</i>"
    }

    if(document.getElementById("audioaudio").volume == 0) {
        tempp = true;
    }

}

// fires when Mute button is clicked

function MuteNow() {
    if (audio.muted) {
        if (tempp == true) {
            // audio.muted = true;
            audio.volume = 1;
        }
        {
            audio.muted = false;
            volumeRange.value = audio.volume;
            document.getElementById("volumev").innerHTML = "<i class='material-icons'>volume_down</i>"
        }
        tempp = false;
    }
    else {
        audio.muted = true;
        volumeRange.value = 0;
        document.getElementById("volumev").innerHTML = "<i class='material-icons'>volume_mute</i>"
    }
}

function shuffle(array) {
    var random = array.map(Math.random);
    array.sort(function (a, b) {
        return random[array.indexOf(a)] - random[array.indexOf(b)];
    });
}
