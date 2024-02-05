const questionBtn = document.querySelector(".questionBtn");
const instructionsBoard = document.querySelector("#instructions");
const returnBtn = document.querySelector(".returnBtn");
const startView = document.querySelector(".startView");
const homeBtn = document.querySelector(".home");
const scoreBoard = document.querySelector("#score_board");
const livesBoard = document.querySelector("#health_board");
const winView = document.querySelector("#level_complete");
const loseview = document.querySelector("#game_over");
const playAgainButton = document.querySelector(".playagain2");
const tryAgainButton = document.querySelector(".playagain1");
const startGameBtn = document.querySelector(".startGameBtn");
const gameBoard = document.querySelector("#game");


let jacobinBtn = document.querySelector(".jacobin")

let interval;
let timeLeft;
let mySound = document.querySelector("#asound");
let rightAnswer = document.querySelector("#rightAnswer");
let tap = document.querySelector("#tap");
let wrongAnswer = document.querySelector("#wrongAnswer");
let score = 0;
const scoreNeededToWin = 3;
let lives = 4;
let gameRunning;




startGameBtn.addEventListener("click", function(e) {
    gameBoard.classList.remove("hidden");
    e.target.parentNode.parentNode.classList.add("notDisplayElement");
    restartGame();
    tap.play();

});

questionBtn.addEventListener("click", function(e) {
    instructionsBoard.classList.remove("hidden");
    tap.play();
});

returnBtn.addEventListener("click", function(e) {
    instructionsBoard.classList.add("hidden");
    startView.classList.remove("hidden");
    tap.play();
});

function welcome1() {
    document.querySelector("#startView").classList.remove("hidden");
    audio1.pause();
    audio2.pause();
    audio3.pause();


}

document.querySelector("#mute").addEventListener("click", mutingMusic);
document.querySelector("#soundon").addEventListener("click", playingMusic);

function playingMusic() {
    mySound.play();

    document.querySelector("#soundon");
}

function mutingMusic() {
    mySound.pause();
    document.querySelector("#mute");
}

function timeRunning() {
    time = document.getElementById("progressbar");
    var timeLeft = 110;
    interval = setInterval(frame, 520);

    function frame() {
        if (gameRunning == true) {
            if (timeLeft == 0) {
                clearInterval(interval);

                loseGame();

            } else {
                timeLeft--;
                time.value = timeLeft;
            }
        }
    }
}

function startGame() {




    mySound.play();
    gameRunning = true;
    clearInterval(interval);
    document.querySelector(".startView").classList.add("hidden");
    playAgainButton.addEventListener("click", restartGame);
    tryAgainButton.addEventListener("click", restartGame);
    timeRunning();
    document.querySelector("#health_board").classList.add("lives3");

    document.querySelector("#score_board").classList.add("score0");





    document.querySelector("#a_container1").addEventListener("click", targetClick);
    document
        .querySelector("#a_container1")
        .addEventListener("animationiteration", destroyedItem);
    document.querySelector("#a_container2").addEventListener("click", targetClick);
    document
        .querySelector("#a_container2")
        .addEventListener("animationiteration", destroyedItem);
    document.querySelector("#a_container3").addEventListener("click", targetClick);
    document
        .querySelector("#a_container3")
        .addEventListener("animationiteration", destroyedItem);
    document.querySelector("#a_container4").addEventListener("click", targetClick);
    document
        .querySelector("#a_container4")
        .addEventListener("animationiteration", destroyedItem);
    document.querySelector("#a_container5").addEventListener("click", targetClick);
    document
        .querySelector("#a_container5")
        .addEventListener("animationiteration", destroyedItem);
    document.querySelector("#a_container6").addEventListener("click", targetClick);
    document
        .querySelector("#a_container6")
        .addEventListener("animationiteration", destroyedItem);




    document.querySelector("#b_container1").addEventListener("click", targetClick2);
    document
        .querySelector("#b_container1")
        .addEventListener("animationiteration", destroyedItem2);
    document.querySelector("#b_container2").addEventListener("click", targetClick2);
    document
        .querySelector("#b_container2")
        .addEventListener("animationiteration", destroyedItem2);
    document.querySelector("#b_container3").addEventListener("click", targetClick2);
    document
        .querySelector("#b_container3")
        .addEventListener("animationiteration", destroyedItem2);
    document.querySelector("#b_container4").addEventListener("click", targetClick2);
    document
        .querySelector("#b_container4")
        .addEventListener("animationiteration", destroyedItem2);

    document.querySelector("#b_container5").addEventListener("click", targetClick2);
    document
        .querySelector("#b_container5")
        .addEventListener("animationiteration", destroyedItem2);

    document.querySelector("#b_container6").addEventListener("click", targetClick2);
    document
        .querySelector("#b_container6")
        .addEventListener("animationiteration", destroyedItem2);




    document.querySelector("#a_container1").classList.add("position1");
    document.querySelector("#a_container1").classList.add("fallDown");
    document.querySelector("#a_container1").classList.add("speed1");
    document.querySelector("#a_container2").classList.add("position5");
    document.querySelector("#a_container2").classList.add("fallDown");
    document.querySelector("#a_container2").classList.add("speed5");
    document.querySelector("#a_container3").classList.add("position3");
    document.querySelector("#a_container3").classList.add("fallDown");
    document.querySelector("#a_container3").classList.add("speed3");
    document.querySelector("#a_container4").classList.add("position7");
    document.querySelector("#a_container4").classList.add("fallDown");
    document.querySelector("#a_container4").classList.add("speed7");

    document.querySelector("#a_container5").classList.add("position11");
    document.querySelector("#a_container5").classList.add("fallDown");
    document.querySelector("#a_container5").classList.add("speed11");
    document.querySelector("#a_container6").classList.add("position12");
    document.querySelector("#a_container6").classList.add("fallDown");
    document.querySelector("#a_container6").classList.add("speed12");


    // bad

    document.querySelector("#b_container1").classList.add("position2");
    document.querySelector("#b_container1").classList.add("fallDown");
    document.querySelector("#b_container1").classList.add("speed2");
    document.querySelector("#b_container2").classList.add("position6");
    document.querySelector("#b_container2").classList.add("fallDown");
    document.querySelector("#b_container2").classList.add("speed6");
    document.querySelector("#b_container3").classList.add("position4");
    document.querySelector("#b_container3").classList.add("fallDown");
    document.querySelector("#b_container3").classList.add("speed4");
    document.querySelector("#b_container4").classList.add("position8");
    document.querySelector("#b_container4").classList.add("fallDown");
    document.querySelector("#b_container4").classList.add("speed8");


    document.querySelector("#b_container5").classList.add("position9");
    document.querySelector("#b_container5").classList.add("fallDown");
    document.querySelector("#b_container5").classList.add("speed9");
    document.querySelector("#b_container6").classList.add("position10");
    document.querySelector("#b_container6").classList.add("fallDown");
    document.querySelector("#b_container6").classList.add("speed10");











}

function targetClick() {
    audio = new Audio("./graphics/good-click.wav");
    audio.play();

    this.classList.add("stop");
    this.removeEventListener("click", targetClick);
    this.firstElementChild.classList.add("rotateAndDisappear");
    this.firstElementChild.addEventListener("animationend", restartItem);
    getPoint();
    document.querySelector("#score_board").classList.value = "";
    score++;

    if (score == 0) {
        document.querySelector("#score_board").classList.add("score0");
    }

    if (score == 1) {
        document.querySelector("#score_board").classList.add("score1");
    }

    if (score == 2) {
        document.querySelector("#score_board").classList.add("score2");
    }

    if (score == 3) {
        document.querySelector("#score_board").classList.add("score3");
    }


    if (score == 0) {
        document.querySelector("#score_board").classList.add("score0");
    }
    checkResult();
}

function targetClick2() {
    wrongAnswer.play();
    console.log("targetClick2");
    this.classList.add("stop");
    this.removeEventListener("click", targetClick2);
    this.firstElementChild.classList.add("rotateAndDisappear");
    this.firstElementChild.addEventListener("animationend", restartItem2);
    losePoint();
    checkResult();
}

function destroyedItem() {
    restartItem();
    this.classList.value = "";
    this.firstElementChild.classList.value = "";
    document.querySelector("html").offsetHeight;

    this.classList.add("fallDown");
}

function destroyedItem2() {
    this.classList.value = "";
    this.firstElementChild.classList.value = "";
    document.querySelector("html").offsetHeight;


    this.classList.add("fallDown");
}

function restartItem() {
    this.parentNode.classList.value = "";
    this.classList.value = "";
    this.removeEventListener("animationend", restartItem);
    document.querySelector("html").offsetHeight;

}

function restartItem2() {
    this.parentNode.classList.value = "";
    this.classList.value = "";
    this.removeEventListener("animationend", restartItem2);
    document.querySelector("html").offsetHeight;

}

function getPoint() {

}

function losePoint() {
    lives--;
    if (lives == 2) {
        document.querySelector("#health_board").classList.remove("lives3");
        document.querySelector("#health_board").classList.add("lives2");
    }
    if (lives == 1) {
        document.querySelector("#health_board").classList.remove("lives2");
        document.querySelector("#health_board").classList.add("lives1");
    }
    if (lives == 0) {
        document.querySelector("#health_board").classList.remove("lives1");
    }
}






function checkResult() {
    if (score >= scoreNeededToWin) {
        winGame();
    }
    if (lives <= 0) {
        loseGame();
    }
}

function gameOver() {

    audio1 = new Audio("./graphics/lose-sound.wav");
    audio1.play();
    audio2.pause();
    mySound.pause();
    document.querySelector(".home").addEventListener("click", exit);
    gameRunning = false;
    // remove all animations
    document.querySelector("#a_container1").classList.value = "";
    document.querySelector("#a_container2").classList.value = "";
    document.querySelector("#a_container3").classList.value = "";
    document.querySelector("#a_container4").classList.value = "";
    document.querySelector("#a_container5").classList.value = "";
    document.querySelector("#a_container6").classList.value = "";



    document.querySelector("#b_container1").classList.value = "";
    document.querySelector("#b_container2").classList.value = "";
    document.querySelector("#b_container3").classList.value = "";
    document.querySelector("#b_container4").classList.value = "";
    document.querySelector("#b_container5").classList.value = "";
    document.querySelector("#b_container6").classList.value = "";



    document.querySelector("#dog").classList.value = "";

    clearInterval(interval);
    // remove all eventListeners
    document
        .querySelector("#a_container1")
        .removeEventListener("animationiteration", destroyedItem);
    document
        .querySelector("#a_container2")
        .removeEventListener("animationiteration", destroyedItem);
    document
        .querySelector("#a_container3")
        .removeEventListener("animationiteration", destroyedItem);
    document
        .querySelector("#a_container4")
        .removeEventListener("animationiteration", destroyedItem);
    document
        .querySelector("#a_container5")
        .removeEventListener("animationiteration", destroyedItem);
    document
        .querySelector("#a_container6")
        .removeEventListener("animationiteration", destroyedItem);
    document
        .querySelector("#b_container1")
        .removeEventListener("animationiteration", destroyedItem2);
    document
        .querySelector("#b_container2")
        .removeEventListener("animationiteration", destroyedItem2);
    document
        .querySelector("#b_container3")
        .removeEventListener("animationiteration", destroyedItem2);
    document
        .querySelector("#b_container4")
        .removeEventListener("animationiteration", destroyedItem2);
    document
        .querySelector("#b_container5")
        .removeEventListener("animationiteration", destroyedItem2);
    document
        .querySelector("#b_container6")
        .removeEventListener("animationiteration", destroyedItem2);
}

function winGame() {
    console.log("game won");
    mySound.pause();
    winView.classList.remove("hidden");
    document.querySelector(".home2").addEventListener("click", exit);
    audio2 = new Audio('./graphics/win-sound.wav');
    audio2.play();
    audio1.pause();


    audio3.pause()


}
// let result = link("https://www.jacobin.com");

function loseGame() {
    console.log("game lost");
    mySound.pause();
    loseview.classList.remove("hidden");

    document.querySelector(".home").addEventListener("click", exit);
    audio3 = new Audio('./graphics/lose-sound.wav');
    audio3.play();
    audio1.pause();

    audio2.pause()


    // document.querySelector(".jacobin").addEventListener("click", result);


}

function exit() {
    console.log("exit");
    startView.classList.remove("notDisplayElement");
    startView.classList.remove("hidden");
    loseview.classList.add("hidden");
    winView.classList.add("hidden");
    gameBoard.classList.add("hidden");
    audio1.pause()
    audio2.pause()
    audio3.pause()

}

function restartGame() {
    document.querySelector("#screen").offsetHeight;
    document.querySelector("#game_over").classList.add("hidden");
    winView.classList.add("hidden");


    resetFallingObjects();

    score = 0;
    lives = 4;
    document.getElementById("asound").load();
    clearInterval(interval);
    document.querySelector("#health_board").classList.value = "";
    document.querySelector("#score_board").classList.value = "";

    startGame();
}


function resetFallingObjects() {
    const fallingObjects = document.querySelectorAll(".fallDown");
    fallingObjects.forEach((obj) => {
        obj.classList.remove("stop");
        obj.classList.remove("fallDown");
        obj.classList.remove("rotateAndDisappear");
        obj.removeEventListener("click", targetClick);
        obj.removeEventListener("click", targetClick2);
        obj.removeEventListener("animationiteration", destroyedItem);
        obj.removeEventListener("animationiteration", destroyedItem2);
    });
}
