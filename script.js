var timer=60;
var score=0;
var hitrn;

var correctSound = new Audio('sound.mp3');

function playCorrectSound() {
    correctSound.play();
}

function increaseScore(){
    score+=1;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble(){
    var clutter="";

for(var i=1;i<=396;i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;

}


function displayGameOver() {
    document.querySelector("#pbtm").innerHTML = `<div style="text-align: center; margin-top: 100px; color: #170539;">
        <h1 style="margin-bottom: 20px;">Game Over!</h1>
        <p style="font-size: 22px; font-weight: 500;">Your final score is: ${score}</p>
    </div>`;
}

function runTimer(){
    var timerint=setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            displayGameOver();
            playGameOverAudio();
        }

    },1000);
}

function playGameOverAudio() {
    var audio = document.getElementById("gameOverAudio");
    audio.play();
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickedNum=(Number(dets.target.textContent));
    if (clickedNum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
        playCorrectSound();
    }
})

runTimer();
makeBubble();
getNewHit();

