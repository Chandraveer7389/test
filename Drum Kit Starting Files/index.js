

for (var i = 0; i <= 6; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handle)
}
function handle() {
    var but = this.innerHTML;
    switch (but) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            var audio1 = new Audio("./sounds/tom-2.mp3");
            audio1.play()
            break;
        case "s":
            var audio2 = new Audio("./sounds/tom-3.mp3");
            audio2.play()
            break;
        case "d":
            var audio3 = new Audio("./sounds/tom-4.mp3");
            audio3.play()
            break;
        case "j":
            var audio4 = new Audio("./sounds/crash.mp3");
            audio4.play()
            break;
        case "k":
            var audio5 = new Audio("./sounds/kick-bass.mp3");
            audio5.play()
            break;
        case "l":
            var audio6 = new Audio("./sounds/snare.mp3");
            audio6.play()
            break;

    }
    animation(but)
}

document.addEventListener("keydown", function (event) {
    var b = event.key;

    switch (b) {
        case "w":
            var a = new Audio("./sounds/tom-1.mp3");
            a.play()
            break;
        case "a":
            var a1 = new Audio("./sounds/tom-2.mp3");
            a1.play()
            break;
        case "s":
            var a2 = new Audio("./sounds/tom-3.mp3");
            a2.play()
            break;
        case "d":
            var a3 = new Audio("./sounds/tom-4.mp3");
            a3.play()
            break;
        case "j":
            var a4 = new Audio("./sounds/crash.mp3");
            a4.play()
            break;
        case "k":
            var a5 = new Audio("./sounds/kick-bass.mp3");
            a5.play()
            break;
        case "l":
            var a6 = new Audio("./sounds/snare.mp3");
            a6.play()
            break;
        default: console.log(b);

    }
    animation(b)
});
function animation(key){
    var gg = document.querySelector("."+key).classList;
    gg.add("pressed");
    setTimeout(anonymous, 100)
    function anonymous(){
        gg.remove("pressed");
}
}
