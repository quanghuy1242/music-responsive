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
    btnPlay.className = "btn btn-light playplay";
    // getduration();
    // alert(document.getElementById("endtime").innerHTML);
    document.getElementById("audioaudio").pause();
});