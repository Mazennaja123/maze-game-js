const startgame = document.getElementById("start");
const endgame = document.getElementById("end");
var scoreboard = document.getElementsByClassName("boundary example");
const limits = document.getElementsByClassName("boundary".match(/^boundary$/));
const gamestat=document.getElementById("status");
var score = 0;

startgame.addEventListener("mouseover",gamestart);
//startgame.addEventListener("mouseleave",left_game_borders);


//Game start
function gamestart(){

          gamestat.textContent="Game started";
          for (var k = 0; k < limits.length-1; k++) {
            limits[k].style.background ="#eeeeee";
            gamestat.style.color="black";
            enable_lose_win();
  }
  }



//User has won !
function you_win(){
  gamestat.textContent="You Win !";
    score=score+5;
    scoreboard[0].innerHTML="Your score: "+score;
    scoreboard[0].style.height = "auto"
    scoreboard[0].style.width = "fit-content"
    disable_lose_win();
}


//User has lost
function you_lose(){

  score=score-10;
  scoreboard[0].innerHTML="Your score: "+score;
  scoreboard[0].style.height = "auto"
  scoreboard[0].style.width = "fit-content"

  for (var k = 0; k < limits.length-1; k++) {
           limits[k].style.background = "red";
           gamestat.textContent="You Lose !";
           gamestat.style.color="red";
         }
  disable_lose_win();
}



//User left game borders

function left_game_borders(){
gamestat.textContent="Get back in the Maze to continue !";
disable_lose_win();
startgame.addEventListener("mouseleave",gamestart);

}



//Enable Win/Lose options
function enable_lose_win(){

endgame.addEventListener("mouseover",you_win);
for (let i = 0; i < limits.length-1; i++) {
        limits[i].addEventListener("mouseover", you_lose);
    }

}


//Disable Win/Lose option

function disable_lose_win(){
  for (var k = 0; k < limits.length-1; k++) {
             limits[k].removeEventListener("mouseover", you_lose);
         }
         endgame.removeEventListener("mouseover",you_win);

}
