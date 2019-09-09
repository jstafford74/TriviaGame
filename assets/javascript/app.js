// Pseudo code - Trivia Game with a Timer
// Create Timer with Start Button
// When timer is finished game is over and information is displayed:
//      Number of correct, incorrect and unanswered questions

// Timer with Start Button
// prevents the clock from being sped up unnecessarily

window.onload = function () {
    $("#reset").on("click", reset);
    $("#start").on("click", start);
    $("#submit").on("click",countScore);
};

var questions = [
    "AJAX is an acronym for Asynchronous JavaScript + XML",
    "Asynchronous means data can be exchanged with the server and the page can be updated without having to refresh the page",
    "API stands for Asynchronous Programming Interface",
    "JSON stands for Javascript Send Objects on Nodes",
    "The 2 parameters passed in order to retrieve data using AJAX is the 'url' and 'GET method'"
];

var answers = [1, 1, 0, 0, 1];
var results = [];
var rightCount = 0;
var wrongCount = 0;
var unAns = 0;
var tbod = $('tbody');




//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var clockRunning = false;
var time = 30;

function reset() {

    time = 30;
    $("#timer").text(':30');
    $("#questions").empty();
    clearInterval(intervalID);
}


function start() {
    //  Use setInterval to start the count here and set the clock to running.
    if (clockRunning == false) {
        intervalID = setInterval(count, 1000);
        clockRunning = true;
    }
    for (var i = 0; i < questions.length; i++) {
       

        $('#questions').append('<tr><td id="question' + parseInt(i + 1) + '">' + questions[i] + '</td>');

    }
        
    for (var j = 0; j < questions.length; j++) {
        $('#question' + parseInt(j + 1)).append('<td id="answer' + parseInt(j + 1) +'"><input type="radio" id="true" name="Q' + parseInt(j + 1) + '" value=1><label for="true">True</label><input type="radio" id="false" name="Q' + parseInt(j + 1) + '" value=0><label for="false">False</label></td></tr>');
      

    }
    $('#questions').append('<button type="submit">Submit</button>');



}

function count() {
    if (time !== 0) {
        time--;
        var timeStr = timeConverter(time);
        $("#timer").text(timeStr);
    }
    else {
        clearInterval(intervalID);
        clockRunning = false;
        countScore();
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


// $(document).on("click", ":radio", countScore);

function countScore() {
    q1r = $("input[name='Q1']:checked").val();
    q2r = $("input[name='Q2']:checked").val();
    q3r = $("input[name='Q3']:checked").val();
    q4r = $("input[name='Q4']:checked").val();
    q5r = $("input[name='Q5']:checked").val();

    results = [q1r, q2r, q3r, q4r, q5r];

    for (i = 0; i < results.length; i++) {
        if (results[i] == 1 && answers[i] == 1) {
            rightCount++;
        }
        else if (results[i] == 0 && answers[i] == 0) {
            rightCount++;
        }
        else if (results[i] == "undefined") {
            unAns++;
        }
        else {
            wrongCount++;
        }
    }
    $("#scoreboard").append('<div id="right"> Right: ' + rightCount + '</div>');
    $("#scoreboard").append('<div id="wrong"> Wrong: ' + wrongCount + '</div>');
    $("#scoreboard").append('<div id="noAns"> No Ans: ' + unAns + '</div>');
    
    time = 30;
    $("#timer").text(':30');
    
    clearInterval(intervalID);
}