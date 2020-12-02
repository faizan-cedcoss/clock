function disp1()
{
  document.getElementById('clock').style.display="block";
 document.getElementById('home').style.display="none";
  document.getElementById('analog').style.display="none";
}
function disp2()
{
  document.getElementById('clock').style.display="none";
  document.getElementById('home').style.display="none";
  document.getElementById('analog').style.display="block";
}
function disp3()
{
  document.getElementById('clock').style.display="none";
  document.getElementById('home').style.display="block";
  document.getElementById('analog').style.display="none";
}
function disp4()
{
  document.getElementById('clock').style.display="none";
  document.getElementById('home').style.display="block";
  document.getElementById('analog').style.display="none";
  document.getElementById('stopwatch').style.display="none";
}
function rotate() {
  var present = new Date();
  var h= present.getHours();
  var m = present.getMinutes();
  var s = present.getSeconds();
  var d=  present.getDate();
  var mon=present.getMonth();
  var w=present.getDay();
  var s1 = s / 60;
  var m1 = (s1 + m) / 60;
  var h1 = (m1 + h) / 12;
  var s2 = s1 * 360;
  var m2 = m1 * 360;
  var h2 = h1 * 360;
  document.querySelector('.second').style.transform = `rotate(${s2}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${m2}deg)`;
  document.querySelector('.hour').style.transform = `rotate(${h2}deg)`;
  document.querySelector('#hours').innerHTML=h;
  document.querySelector('#minutes').innerHTML=m;
  document.querySelector('#day').innerHTML=d;
  document.querySelector('#month').innerHTML=mon;
   var w1;
  switch(w)
  {
    case 0:
    w1="Sun";
    break;
    case 1:
    w1="Mon";
    break;
    case 2:
    w1="Tue";
    break;
    case 3:
    w1="Wed";
    break;
    case 4:
    w1="Thu";
    break;
    case 5:
    w1="Fri";
    break;
    case 6:
    w1="Sat";
    break;
  }
  document.querySelector('#week').innerHTML=w1;  

}
setInterval(rotate, 1000);
