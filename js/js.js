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
    // alert("212");
    $('[data-toggle="tooltip"]').tooltip();
    // PlayNow();
    document.getElementById("defaultplay").click();
    btnPlay.className = "";
    btnPlay.className = "playplay";
    getduration();
    // alert(document.getElementById("endtime").innerHTML);
    document.getElementById("audioaudio").pause();
});
function abcd (){
    var a = document.getElementById("player").offsetWidth;
    var b = a - 73;
    var c = b + 'px';
    document.getElementById("audioaudio").style.width = c;
}

function cdef(){
    var a = document.getElementById("myaudioplayer1").offsetWidth;
    var d = document.getElementById("btnPlay").offsetWidth;
    var e = document.getElementById("lblTime").offsetWidth;
    var f = document.getElementById("volume").offsetWidth;
    var g = document.getElementById("endtime").offsetWidth;
    var xx = a - d - e - f - g -25;
    var xy = xx +'px';
    // alert(a);
    document.getElementById("seekbar").style.width = xy;
}
// document.getElementById("s").addEventListener
// var nn = document.getElementById("baihatalbum");
// for(var i = 0;i>nn.length;i++){
//     nn[i].addEventListener("mouseup",getduration,false);
// }