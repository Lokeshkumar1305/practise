var h2 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    reset = document.getElementById('reset'),
    seconds = 0, minutes = 0, hours = 0,
    t;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    startstopwatch();
}
function startstopwatch() {
    t = setTimeout(add, 1000);
}
startstopwatch();
/* stopwatch Start button */
start.onclick = startstopwatch;
/* stopwatch Stop button */
pause.onclick = function() {
    clearTimeout(t);
}
/* stopwatch Clear button */
reset.onclick = function() {
    h2.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}