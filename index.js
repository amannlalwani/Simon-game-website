$(document).keypress(function(event){
  if(event.key=="A"||event.key=="a"){

game();
  }
});

function game(){
gameSequence=[];

gameColors=["blue","yellow","red","green"];
level=0;

levelUp();
chance=0;
i=1;

function levelUp(){
  var randomColor=gameColors[Math.floor(Math.random()*4)];
  gameSequence.push(randomColor);
  keyAnimation(randomColor);
  playSound(randomColor);
  chance=0;
  level++;
  $("h1").text("Level "+ level);

}
function keyAnimation(keyPressed){
  $("."+keyPressed).addClass("pressed");
  setTimeout(function (){
    $("."+keyPressed).removeClass("pressed");
  },100);
}


function gameOverAnimation(){
  $("body").addClass("game-over");
  setTimeout(function (){
    $("body").removeClass("game-over");
  },100);
}
function playSound(keyPressed){
  btnAudio=new Audio("sounds/"+keyPressed+".mp3");
  btnAudio.play();
}


    $(".btn").click(function (){

      var key=this.id;
      keyAnimation(key);
     playSound(key);
setTimeout(function() {
  if(key==gameSequence[chance]){
    console.log(i);
    console.log("gg");
    if(chance+1==gameSequence.length){
    chance=0;
    i++;
    levelUp();
    }
    else{
    chance++;
  }
  }
  else{
    gameOverAnimation();
    playSound("wrong");
    $("h1").text("Game Over!Press Any Key To Play Again");
    $(".btn").unbind("click");
    $(document).unbind("keypress");
    $(document).keypress(function(){
      game();
    });
  }
}, 700);
    });
  }
