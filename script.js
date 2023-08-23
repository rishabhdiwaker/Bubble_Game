
var timer = 60;
var score = 0;
var hitrn;

// hit 
function getHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function incScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// to make bubble
function makeBubble() {
    var clutter = "";
    for (let i = 1; i <= 99; i++) {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class = "bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;

}

// for timer 
function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`
        }
    }, 1000)
}

// 
document.querySelector("#pbtm").addEventListener('click', function (dets) {
    var clickedNum = Number(dets.target.textContent)
    if (hitrn === clickedNum) {
        incScore();
        makeBubble();
        getHit();
    }
})


incScore()
getHit();
runTimer();
makeBubble(); 
