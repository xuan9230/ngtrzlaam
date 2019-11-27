const loveDate = new Date("09/19/2014 00:00:00 GMT+1000 (AEST)");
const missingDate = new Date("10/20/2019 20:34:25 GMT+1000 (AEST)");
let now = new Date();

function subtractDate(low, high) {
  var secs = 1000;
  var min = secs * 60;
  var hour = min * 60;
  var day = hour * 24;
  var miliSecs = Math.abs(high.getTime() - low.getTime());
  var days = Math.floor(miliSecs / day);
  miliSecs = miliSecs % day;
  var hours = Math.floor(miliSecs / hour);
  miliSecs = miliSecs % hour;
  var mins = Math.floor(miliSecs / min);
  miliSecs = miliSecs % min;
  var sec = Math.floor(miliSecs / secs);
  return {
    day: days > 1 ? days + " d" : days + " d",
    hour: hours > 1 ? hours + " h" : hours + " h",
    min: mins > 1 ? mins + " m" : mins + " m",
    sec: sec > 1 ? sec + " s" : sec + " s"
  };
}

function renderTime1() {
  var sDate = subtractDate(loveDate, missingDate);
  var str = sDate.day + ", " + sDate.hour + ", " + sDate.min + ", " + sDate.sec;
  document.getElementById("time-1").innerHTML = str;
}

function renderTime2() {
  now = new Date();
  var sDate = subtractDate(missingDate, now);
  var str = sDate.day + ", " + sDate.hour + ", " + sDate.min + ", " + sDate.sec;
  document.getElementById("time-2").innerHTML = str;
}

renderTime1();
renderTime2();

window.setInterval(renderTime2, 1000);
