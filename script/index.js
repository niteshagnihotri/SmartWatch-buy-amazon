/* Watch Colors*/
var red = document.getElementById('red');
var black = document.getElementById('black');
var violet = document.getElementById('violet');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
/* Watch Colors*/

var timer = document.getElementById('watchTime');
var heart = document.getElementById('heartbeat');
var timebtn = document.getElementById('Time');
var heartRatebtn = document.getElementById('HeartRate');

function displaytimer()
{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    d = `${h}:${m}:${s}`;
    timer.innerHTML=d;
}setInterval(displaytimer, 1000);

timebtn.addEventListener('click', function(){
    if(timer.style.display=="none"){
        timer.style.display="block";
        heart.style.display="none";
    }
    else{
        timer.style.display="none";
        heart.style.display="none";
    }
});
heartRatebtn.addEventListener('click', function(){
    if(heart.style.display=="none"){
        heart.style.display="block";
        timer.style.display="none";
    }
    else{
        heart.style.display="none";
        timer.style.display="none";
    }
});

red.addEventListener('click', function (){
    watch.src = './img/red.png';
});
black.addEventListener('click', function (){
    watch.src = './img/black.png';
});
violet.addEventListener('click', function (){
    watch.src = './img/violet.png';
});
pink.addEventListener('click', function (){
    watch.src = './img/pink.png';
});
purple.addEventListener('click', function (){
    watch.src = './img/purple.png';
});





