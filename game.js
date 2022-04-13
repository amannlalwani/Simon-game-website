function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  return randomNumber;
}
gamePattern=[];
 buttonColors=["red", "blue", "green", "yellow"];
 randomChosenColor=buttonColors[nextSequence()];
 gamePattern.push(randomChosenColor);


  $("."+randomChosenColor).addClass("pressed");
  setTimeout(  $("."+randomChosenColor).removeClass("pressed"),100);
