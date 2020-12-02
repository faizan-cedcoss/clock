
function rotate() {
  var currentDate = new Date();
  var h= currentDate.getHours();
  var m = currentDate.getMinutes();
  var s = currentDate.getSeconds();
  var s1 = s / 60;
  var m1 = (s1 + m) / 60;
  var h1 = (m1 + h) / 12;
  var s2 = s1 * 360;
  var m2 = m1 * 360;
  var h2 = h1 * 360;
  document.querySelector('.second').style.transform = `rotate(${s2}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${m2}deg)`;
  document.querySelector('.hour').style.transform = `rotate(${h2}deg)`;
}
setInterval(rotate, 1000);