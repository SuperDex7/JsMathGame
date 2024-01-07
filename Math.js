let easy = document.getElementById('easy');
let hard = document.getElementById('hard');
let body = document.querySelector('body');
let difficulty = 0;
function hardworks() {
  
  hard.innerHTML = 'whatevaaa';
  body.style.backgroundImage = 'url(https://cdna.artstation.com/p/assets/images/images/047/517/388/original/inkpendude-portal-storm.gif?1647794887)';
  difficulty = 3;
}
//put medium function
function easyworks() {
  
    hard.innerHTML = 'whatevaaa';
    body.style.backgroundImage = 'url(https://cdnb.artstation.com/p/assets/images/images/047/517/381/original/inkpendude-portal-calm.gif?1647794880)';
    difficulty = 1;
  }
hard.addEventListener('click', hardworks);
easy.addEventListener('click', easyworks);