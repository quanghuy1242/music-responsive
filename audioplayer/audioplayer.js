// get the audio, volume and seekbar elements
var audio = document.getElementById("audioaudio");
var volumeRange = document.getElementById('volume');
var seekbar = document.getElementById('seekbar');

window.onload = function () {
    getduration();
    audio.addEventListener('timeupdate', UpdateTheTime, false);
    audio.addEventListener('durationchange', SetSeekBar, false);
    volumeRange.value = audio.volume;
    // PlayNow();
}
window.onmouseover = function () {
    getduration();
}

document.getElementById("")

function getduration() {
    var sec = document.getElementById("audioaudio").duration;
    sec = sec % 3600;
    var min = Math.floor(sec / 60);
    sec = Math.floor(sec % 60);
    if (sec.toString().length < 2) sec = "0" + sec;
    if (min.toString().length < 2) min = "0" + min;
    // document.getElementById('lblTime').innerHTML = h + ":" + min + ":" + sec;
    document.getElementById('endtime').innerHTML = min + ":" + sec;
}

// fires when volume element is changed
function ChangeVolume() {
    var myVol = volumeRange.value;
    audio.volume = myVol;
    if (myVol == 0) {
        audio.muted = true;
    } else {
        audio.muted = false;
    }
}

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
    var h = Math.floor(sec / 3600);
    sec = sec % 3600;
    var min = Math.floor(sec / 60);
    sec = Math.floor(sec % 60);
    if (sec.toString().length < 2) sec = "0" + sec;
    if (min.toString().length < 2) min = "0" + min;
    // document.getElementById('lblTime').innerHTML = h + ":" + min + ":" + sec;
    document.getElementById('lblTime').innerHTML = min + ":" + sec;
    seekbar.min = audio.startTime;
    seekbar.max = audio.duration;
    seekbar.value = audio.currentTime;
}

var btnPlay = document.getElementById("btnPlay");
// fires when Play button is clicked
function PlayNow() {
    getduration();
    if (audio.paused) {
        audio.play();
        btnPlay.className = "";
        btnPlay.className = "pause";
    } else if (audio.ended) {
        audio.currentTime = 0;
        audio.play();
    } else if(audio.play) {
        audio.pause();
        btnPlay.className = "";
        btnPlay.className = "playplay";
    }
}
// fires when Pause button is clicked
function PauseNow() {
    if (audio.play) {
        audio.pause();
    }
}
// fires when Mute button is clicked
function MuteNow() {
    if (audio.muted) {
        audio.muted = false;
        volumeRange.value = audio.volume;
    }
    else {
        audio.muted = true;
        volumeRange.value = 0;
    }
}

