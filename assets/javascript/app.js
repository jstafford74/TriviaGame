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

var questions =[
    "AJAX is an acronym for Asynchronous JavaScript + XML",
    "Asynchronous means data can be exchanged with the server and the page can be updated without having to refresh the page",
    "API stands for Asynchronous Programming Interface",
    "JSON stands for Javascript Send Objects on Nodes",
    "The 2 parameters passed in order to retrieve data using AJAX is the 'url' and 'GET method'"
];

var answers = [ "true", "true", "false","false","true"];






//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var clockRunning = false;
var time = 30;

function reset() {

    time = 30;
    $("#display").text(':30');
    $("#questions").empty(); 
}

function start() {
    //  Use setInterval to start the count here and set the clock to running.
    if (clockRunning == false) {
        intervalID = setInterval(count, 1000);
        clockRunning = true;
    }
    for (var i = 0; i < questions.length; i++) {
        $('#questions').append('<div id="question"' + i + '>' + questions[i] + '</div>');
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

// Pseudo code for start button
// Display # of correct, incorrect and unanswered questions
// Display 5 True of false questions




