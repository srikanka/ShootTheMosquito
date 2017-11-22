/**
 * Created by kajeepansrikanthan on 2017-05-25.
 */
var score = 0;
var highScore = 0;
var time = 15;
var currentTime = document.getElementById("currentTime");
var startTimer;
var startBtn = document.getElementById("startBtn");
var rules = document.getElementById("rules");
var mosquitoImg = document.getElementById("image");
var currentScore =  document.getElementById("currentScore");
var doc = document.documentElement;

window.onload = function () {

    doc.style.cursor = "crosshair";


    var img = document.createElement("img");
    //getting the screen size
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    //start button clicked
    startBtn.onclick = function () {
        startBtn.style.display = "none";
        rules.style.display = "none";
        mosquitoImg.style.display = "block";
        //show and start timer
        var timer = document.getElementById("timer");
        timer.style.display = "block";
        startTimer = setInterval(decrementTimer, 1000);

        img.src = "img/mosquito.png";
        img.setAttribute("height", "60px");
        img.setAttribute("width", "50px");
        img.style.position = "relative";
        img.style.top = "150px";
        mosquitoImg.appendChild(img);

        img.onmousedown = function () {
            doc = document.documentElement;
            doc.style.cursor = "crosshair";
        }


        score = 0;
    }

    img.onclick = function () {
        //blur image
        img.style.filter = "blur(3px)";
        setTimeout(moveMosquito, 300);

        //increment the high score
        score++;
        currentScore.innerHTML = score;
    }

    function moveMosquito() {
        img.style.filter = "blur(0px)";
        //random height
        var hmin = 0.15;
        var hmax = 0.8;
        var rh = Math.random() * (hmax - hmin) + hmin;
        //random width
        var wmin = 0;
        var wmax = 0.95;
        var rw = Math.random() * (wmax - wmin) + wmin;

        var mh = h * rh;
        var mw = w * rw;
        img.style.position ="absolute";
        img.style.left = mw + "px";
        img.style.top = mh + "px";

    }

}

function decrementTimer() {
    time--;

    if(time < 0){
        resetPage();
    }
    else if(time < 10){
        currentTime.innerHTML = "0:0" + time;
    }
    else{
        currentTime.innerHTML = "0:" + time;
    }
}

function resetPage() {
    if(score>highScore){
        highScore = score;
        var highScoreIn = document.getElementById("score");
        highScoreIn.innerHTML = highScore;
        alert("You've got a new high score!");
    }
    score=0;
    currentScore.innerHTML = score;
    var timer = document.getElementById("timer");
    timer.style.display = "none";
    mosquitoImg.style.display = "none";
    startBtn.style.display = "block";
    rules.style.display = "block";
    time = 15;
    clearInterval(startTimer);
}

