var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mlisec = document.getElementById("mli-sec");
var start_btn = document.getElementById("start_btn");

var hours = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;

var watchInterval;

function start() {
  watchInterval = setInterval(function () {
    milliSeconds++;
    if (milliSeconds >= 60) {
      seconds++;
      milliSeconds = 0;
    }
    if (seconds >= 59) {
      minutes++;
      seconds = 0;
    }
    if (minutes >= 59) {
      hours++;
      minutes = 0;
    }
    mlisec.innerText = milliSeconds;
    sec.innerText = seconds < 10 ? "0" + seconds : seconds;
    min.innerText = minutes < 10 ? "0" + minutes : minutes;
    hr.innerText = hours < 10 ? "0" + hours : hours;
    start_btn.disabled = true;
  }, 50);
}
function stop() {
  clearInterval(watchInterval);
  start_btn.disabled = false;
}
function reset() {
  clearInterval(watchInterval);
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var milliSeconds = 0;
  hr.innerText = 0;
  min.innerText = 0;
  sec.innerText = 0;
  mlisec.innerText = 0;
  start_btn.disabled = false;
}
