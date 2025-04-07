var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userChosenColour;
var userClickedPattern = [];
var level = 1;
var tog = true;


function sequence() {
    userClickedPattern = [];
    $("h1").text(`Level: ${level}`)
    var randomnumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomnumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    level = level + 1;
}
function handle(event) {
    userChosenColour = $(event).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length);

}
function playSound(sound) {
    var music = new Audio(`./sounds/${sound}.mp3`);
    music.play();
}
function animatePress(currentColour) {
    document.getElementById(currentColour).classList.add("pressed")
    setTimeout(function () {
        document.getElementById(currentColour).classList.remove("pressed")
    }, 100);
}
function gameover() {
    var music = new Audio("./sounds/wrong.mp3");
    music.play();
    $("h1").text("Game Over, Press Any Key to Restart");
    document.body.classList.add("game-over")
    setTimeout(function () {
        document.body.classList.remove("game-over")
    }, 200);
    gamePattern = [];
    level = 1;
    tog = true;
    userClickedPattern = [];
}
function checkAnswer(l) {
    var lg = "success";
    var i = 0;
    while (i < l) {
        if (gamePattern[i] !== userClickedPattern[i]) {
            lg = "fail";
            break;
        }
        i++;
    }
    if (lg === "fail") {
        gameover();
    }
    if (lg === "success" && l === gamePattern.length) {
        setTimeout(function () {
            sequence();
        }, 1000);
    }
}
$(document).keydown(function () {
    if (tog === true) {
        sequence();
        tog = false;
    }
})
$(".btn").click(function () {
    handle(this);
})