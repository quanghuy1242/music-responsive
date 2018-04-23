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

    //animate
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(200);
    });
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200);
    });
    

    document.getElementById("defaultplay").click();
    document.getElementById("audioaudio").pause();
    btnPlay.innerHTML = "<i class='material-icons'>play_arrow</i>";
    

});

var tenbh = document.getElementsByClassName("baihatalbum");
var tencs = document.getElementsByClassName("nghesialbum");
var dangphat = document.getElementsByClassName("dangphat");
var btnPlay = document.getElementById("btnPlay");
var audio = document.getElementById("audioaudio");

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
    if(document.getElementById("s").innerHTML == "off") {
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
            document.getElementById("stt").innerHTML = stt * 1 + 1;
    
            for (var x = 0; x < dangphat.length; x++) {
                dangphat[x].style.opacity = "0";
            }
            dangphat[stt].style.opacity = "1";
        }
    } else {
        var nn = Math.floor(Math.random() * thutubh.length) + 0;
        Playnhac(nn);
    }
}
var thutubh = document.getElementsByClassName("thutubaihat");
audio.addEventListener('ended',function(){
    if(document.getElementById("s").innerHTML == "off") {
        if(document.getElementById("stt").innerHTML == thutubh.length){
            Playnhac(0);
        }
        else {
            next();
        }
    } else {
        var nn = Math.floor(Math.random() * thutubh.length) + 0;
        Playnhac(nn);
    }
    
},false);
// var nn = Math.floor(Math.random() * thutubh.length) + 0;
// console.log(nn);
var loop1 = document.getElementById("loop1");
function looop1(){
    if(audio.loop) {
        audio.loop = false;
        loop1.innerHTML = '<i class="material-icons">repeat</i>';
    }
    else {
        audio.loop = true;
        loop1.innerHTML = '<i class="material-icons">repeat_one</i>';
    }
    
}

function shufflesong() {
    if(document.getElementById("s").innerHTML == "on") {
        document.getElementById("s").innerHTML = "off";
        document.getElementById("ss").style.color = "#505050";
    }
    else {
        document.getElementById("s").innerHTML = "on";
        document.getElementById("ss").style.color = "#398791";
    }
}

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);

            $("#dnn").validate({
                // errorClass: 'aaa',
                rules: {
                    tendangnhap: "required",
                    matkhau: "required",
                },
                messages: {
                    tendangnhap: "Tên người dùng không để trống!",
                    matkhau: "Mật khẩu không để trống!",
                },
                errorElement: "div",
                success: function (label) {
                    label
                        .text('Thông tin hợp lệ!').addClass('valid')
                        .closest('.form-element').addClass('success');
                },
            });

            $("#dkk").validate({
                // errorClass: 'aaa',
                rules: {
                    tendangki: "required",
                    email: {
                        email: true,
                        required: true,
                    },
                    matkhaudk: {
                        required: true,
                        minlength: 8
                    },
                    rematkhaudk: {
                        equalTo: "#mk",
                        required: true,
                    },
                    ngay: {
                        required: true,
                        min: 1,
                        max: 31
                    },
                    thang: {
                        required: true,
                        min: 1,
                        max: 12
                    },
                    nam: {
                        required: true,
                        min: 1900,
                        max: 2018
                    }
                },
                messages: {
                    tendangki: "Tên đăng kí không được để trống.",
                    email: {
                        email: "Email phải có định dạng abc@mail.xyz.",
                        required: "Email không được để trống.",
                    },
                    matkhaudk: {
                        required: "Mật khẩu không để trống.",
                        minlength: "Mật khẩu tối thiểu 8 kí tự."
                    },
                    rematkhaudk: {
                        equalTo: "Mật khẩu không khớp.",
                        required: "Mật khẩu không để trống.",
                    },
                    ngay: {
                        required: "Bắt buộc nhập",
                        min: "Ngày phải nằm trong khoảng 1 - 31",
                        max: "Ngày phải nằm trong khoảng 1 - 31"
                    },
                    thang: {
                        required: "Bắt buộc nhập",
                        min: "Ngày phải nằm trong khoảng 1 - 12",
                        max: "Ngày phải nằm trong khoảng 1 - 12"
                    },
                    nam: {
                        required: "Bắt buộc nhập",
                        min: "Ngày phải nằm trong khoảng 1990 - 2018",
                        max: "Ngày phải nằm trong khoảng 1990 - 2018"
                    }
                },
                errorElement: "div",
                success: function (label) {
                    label
                        .text('Thông tin hợp lệ!').addClass('valid')
                        .closest('.form-element').addClass('success');
                },
            });

        });
    }, false);
})();