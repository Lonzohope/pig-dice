// business logic


// turnScore is the total amount of points added from several rolls of the dice
// rollScore is just one roll of the dice
// score refers to total score
var dice2 = Math.floor(Math.random() * 6);
var maximumscore=100;
var round1=0;
var round2=0;
var playerScore1=0;
var playerScore2=0;
var hold1="";
var hold2="";

$(document).ready(function() {

  //hide my Game Rules first
  $('#list1').hide();

  //show game rules onclick
  $('#rules').click(function() {
    $('#list1').fadeToggle(100);
  });


  $("#press1").click(function(){
    player1();
  })
  $("#press2").click(function(){
    player2();
  })
  $("#hold1").click(function(){
    return hold1=true
  })
  $("#hold2").click(function(){
    return hold2=true
  })
})

function player1(){
  var dice1 = Math.floor(Math.random() * 7);
  $("#roll1val").text("value from roll "+ dice1);
if(round1===maximumscore){
    playerScore1+=round1;
    console.log("win");
}
if(dice1!=1){
    round1+=dice1;
}
if(dice1===1){
  round1-=round1;
  alert("you hit a 1")
//  $("#hit1").text("you hit a 1 ");
  }
  if(hold1===true){
    playerScore1+=round1;
    round1-=round1;
    $("#chance1").text("player2 plays");
  }
  $("#round1").text("round1 value"+round1);
  $("#totalscore1").text("this is your total score "+ playerScore1);
}
function player2(){
  var dice2 = Math.floor(Math.random() * 7);
  $("#roll2val").text("value from roll "+ dice2);
if(round2===maximumscore){
    playerScore2+=round2;
    console.log("win");
}
if(dice2!=1){
    round2+=dice2;
}
if(dice2===1){
  round2-=round2;
  alert("You hit a 1")
//  $("#hit2").text("you hit a 1 ");
}
if(hold2===true){
    playerScore2+=round2;
    round2-=round2;
    $("#chance2").text("player1 plays");
}
  $("#round2").text("round2 value"+round2);
  $("#totalscore2").text("this is your total score "+ playerScore2);
}
