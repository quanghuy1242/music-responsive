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
});
function abcd (){
    var a = document.getElementById("player").offsetWidth;
    var b = a - 73;
    var c = b + 'px';
    document.getElementById("audioaudio").style.width = c;
}