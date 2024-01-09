let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let body = document.querySelector('body');
let title = document.getElementById('title'); 
let start = document.getElementById('startb');
let difficulty = 0;
 function startworks(){
easy.style.display = 'block';
medium.style.display = 'block';
hard.style.display = 'block';
start.style.display = 'none';
start.removeEventListener('click', startworks);
easy.addEventListener('click', easyworks);
medium.addEventListener('click', mediumworks);
hard.addEventListener('click', hardworks);
 }
function easyworks(){
    alert("EASYYY");
}
function mediumworks(){
alert("MEDIUMM");
}
function hardworks(){
    body.style.backgroundImage = 'url(https://cdna.artstation.com/p/assets/images/images/047/517/388/original/inkpendude-portal-storm.gif?1647794887)'
}
start.addEventListener('click', startworks);