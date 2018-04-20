// Pôpver
$(function () {
    $("[data-toggle=popover]").popover({
        html: true,
        content: function () {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        },
        title: function () {
            var title = $(this).attr("data-popover-content");
            return $(title).children(".popover-heading").html();
        }
    });
    $('[data-toggle="tooltip"]').tooltip();

    document.getElementById("defaultplay").click();
    document.getElementById("audioaudio").pause();
    btnPlay.innerHTML = "<i class='material-icons'>play_arrow</i>";
});

var tenbh = document.getElementsByClassName("baihatalbum");
var tencs = document.getElementsByClassName("nghesialbum");
var dangphat = document.getElementsByClassName("dangphat");
var btnPlay = document.getElementById("btnPlay");

function Playnhac(i) {
    var stt = document.getElementById("stt").innerHTML;
    document.getElementById("namesong").innerHTML = tenbh[i].innerHTML;
    document.getElementById("nameart").innerHTML = tencs[i].innerHTML;
    document.getElementById("audioaudio").src = nhacs[i];
    document.getElementById("audioaudio").autoplay = "autoplay";
    document.getElementById("stt").innerHTML = i + 1;

    for (var x = 0; x < dangphat.length; x++) {
        dangphat[x].style.opacity = "0";
    }
    dangphat[i].style.opacity = "1";

    if (audio.play) {
        btnPlay.innerHTML = "<i class='material-icons'>pause</i>";
    } else {
        btnPlay.innerHTML = "<i class='material-icons'>play_arrow</i>";
    }

}

function prev() {
    var stt = document.getElementById("stt").innerHTML;

    if (stt > 1) {
        if (audio.play) {
            btnPlay.innerHTML = "<i class='material-icons'>pause</i>";
        } else {
            btnPlay.innerHTML = "<i class='material-icons'>play_arrow</i>";
        }

        document.getElementById("namesong").innerHTML = tenbh[stt - 2].innerHTML;
        document.getElementById("nameart").innerHTML = tencs[stt - 2].innerHTML;
        document.getElementById("audioaudio").src = nhacs[stt - 2];
        document.getElementById("audioaudio").autoplay = "autoplay";
        document.getElementById("stt").innerHTML = stt - 1;
        
        for (var x = 0; x < dangphat.length; x++) {
            dangphat[x].style.opacity = "0";
        }
        dangphat[stt - 2].style.opacity = "1";
    }
}

function next() {
    var stt = document.getElementById("stt").innerHTML;

    if (stt < tenbh.length) {
        if (audio.play) {
            btnPlay.innerHTML = "<i class='material-icons'>pause</i>";
        } else {
            btnPlay.innerHTML = "<i class='material-icons'>play_arrow</i>";
        }
        document.getElementById("namesong").innerHTML = tenbh[stt].innerHTML;
        document.getElementById("nameart").innerHTML = tencs[stt].innerHTML;
        document.getElementById("audioaudio").src = nhacs[stt];
        document.getElementById("audioaudio").autoplay = "autoplay";
        document.getElementById("stt").innerHTML = stt*1+1;
        
        for (var x = 0; x < dangphat.length; x++) {
            dangphat[x].style.opacity = "0";
        }
        dangphat[stt].style.opacity = "1";
    }
}

