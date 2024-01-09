let easy = document.getElementById('easy');
let hard = document.getElementById('hard');
let body = document.querySelector('body');
let title = document.getElementById('title'); 
let red = document.getElementById('red');
let difficulty = 0;
function hardworks() { 
  body.style.backgroundImage = 'url(https://cdna.artstation.com/p/assets/images/images/047/517/388/original/inkpendude-portal-storm.gif?1647794887)';
  difficulty = 3;
}
//put medium function
function easyworks() {
    body.style.backgroundImage = 'url(https://cdnb.artstation.com/p/assets/images/images/047/517/381/original/inkpendude-portal-calm.gif?1647794880)';
    difficulty = 1;
  }
  function redworks() {
    title.style.color = 'red';
  }
  function mediumworks() {
    body.style.backgroundImage = 'url(https://cdnb.artstation.com/p/assets/images/images/047/517/381/original/inkpendude-portal-calm.gif?1647794880)';
    difficulty = 2;
  }
  red.addEventListener('click', redworks);
hard.addEventListener('click', hardworks);
medium.addEventlistener('click', mediumworks);
easy.addEventListener('click', easyworks);
