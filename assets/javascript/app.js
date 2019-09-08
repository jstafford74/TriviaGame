// Pseudo code - Trivia Game with a Timer
// Create Timer with Start Button
// When timer is finished game is over and information is displayed:
//      Number of correct, incorrect and unanswered questions

// Timer with Start Button
// prevents the clock from being sped up unnecessarily

window.onload = function () {
    $("#reset").on("click", reset);
    $("#start").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var clockRunning = false;
var time = 30;

function reset() {

    time = 30;
    $("#display").text(':30');
}

function start() {
    //  Use setInterval to start the count here and set the clock to running.
    if (clockRunning == false) {
        intervalID = setInterval(count, 1000);
        clockRunning = true;
    }

}


function count() {
    if (time !== 0){
    time--;
    var timeStr = timeConverter(time);
    $("#display").text(timeStr);
    }
    else {
        clearInterval(intervalID);
        clockRunning = false;
        console.log("time's up");   
       }
    }



function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return ":" + seconds;
}

