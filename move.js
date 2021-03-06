const character = document.querySelector('.character').style;
const character2 = document.querySelector('.character2').style;
const penguin = document.querySelector('.penguin-container').style;

let ch_top = 472;
let ch_left = 469;

penguin.transform = "scaleX(-1)";
character.top = `${ch_top}px`;
character.left =  `${ch_left}px`;

const TOP_MAX = 510;
const TOP_MIN = 404;
const LEFT_MAX = 885;
const LEFT_MIN = 129;

const amount = 6;

document.addEventListener('keydown', characterMove);

character2.addEventListener()

function characterMove(e){

  e.preventDefault();
  if(e.key === 'ArrowDown'){
    ch_top += amount;
    if(ch_top >= TOP_MAX){ ch_top = TOP_MAX; }
    if(ch_top <= TOP_MIN){ ch_top = TOP_MIN; }
    character.top = `${ch_top}px`;
  } 
  
  else if (e.key === 'ArrowUp'){
    ch_top -= amount;
    if(ch_top >= TOP_MAX){ ch_top = TOP_MAX; }
    if(ch_top <= TOP_MIN){ ch_top = TOP_MIN; }
    character.top = `${ch_top}px`;
  } 
  
  else if(e.key === 'ArrowLeft'){
    ch_left -= amount;
    if(ch_left >= LEFT_MAX){ ch_left = LEFT_MAX; }
    if(ch_left <= LEFT_MIN){ ch_left = LEFT_MIN; }
    character.left = `${ch_left}px`;
    character.transform = "scaleX(-1)";
  } 
  
  else if(e.key === 'ArrowRight'){
    ch_left += amount;
    if(ch_left >= LEFT_MAX){ ch_left = LEFT_MAX;} 
    if(ch_left <= LEFT_MIN){ ch_left = LEFT_MIN; }
    character.left = `${ch_left}px`;
    character.transform = "scaleX(1)";
  }
}
