let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let body = document.querySelector('body');
let title = document.getElementById('title'); 
let start = document.getElementById('startb');
let input = document.getElementById('input');


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

function easymath(){
    easy.style.display = 'none';
    medium.style.display = 'none';
    hard.style.display = 'none';
    do{
    let first = Math.floor(Math.random() * 12);
    let second = Math.floor(Math.random() * 12);
    let score = 0;
    let answer
    let bruh = Math.floor(Math.random() * 2);
    let guess
    
    
    switch(bruh){
case 0:

    answer = first + second;
    title.innerHTML = first + ' + ' + second;
    guess = input.value;
    if (answer == guess){
        score++;
        alert("good shiiii");
    } else {
        alert("bad shiiii");
    }
    break;
    case 1:
        answer = first - second;
    title.innerHTML = first + ' - ' + second;
    guess = input.value;
    if (answer == guess){
        score++;
        alert("good shiiii");
    } else {
        alert("bad shiiii");
    }
    }
    

    }while(score < 10)
}



function easyworks(){
    input.style.display = 'block';
    easymath();
}
function mediumworks(){
alert("MEDIUMM");
}
function hardworks(){
    body.style.backgroundImage = 'url(https://cdna.artstation.com/p/assets/images/images/047/517/388/original/inkpendude-portal-storm.gif?1647794887)'
}
start.addEventListener('click', startworks);