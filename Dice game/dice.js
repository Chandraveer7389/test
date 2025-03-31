var num1 = Math.floor(Math.random()*6) + 1;
var num2 = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[0].setAttribute("src","./images/dice" + num1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src","./images/dice" + num2 + ".png");
if(num1 == num2){
    document.querySelector("h1").innerHTML="Draw!";
}else if(num1 > num2){
    document.querySelector("h1").innerHTML="🚩Player1 Won!";
}else{
    document.querySelector("h1").innerHTML="🚩Player2 Won!";
}