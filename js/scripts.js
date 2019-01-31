//create an array to store player objects

function Game() {
  this.players = [];
}

Game.prototype.addPlayer = function(player){
  this.players.push(player);
}

//begin player logic
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.roll = 0;
  this.round = 1
}

Player.prototype.rollDice = function() {
  var myRoll = Math.floor(6*Math.random())+1;
  return myRoll;
}

Player.prototype.checkWin = function(totalScore) {
  if (this.totalScore >= 20) {
    alert("WINNER WINNER CHICKEN DINNER");
  }
}

Player.prototype.nextRound = function() {
  this.round += 1;
}


Player.prototype.holdScore = function(){
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  this.checkWin(this.totalScore);
  this.roundCheck();
  incrementRound();
}

Player.prototype.getRoundScore = function() {
  var myRoll = this.rollDice();
    if(myRoll > 1) {
      this.roundScore += myRoll;
      this.roll = myRoll;

    } else {
      this.roundScore = 0;
      this.roll = myRoll;
      this.roundCheck();
      incrementRound();
      }
    }

Player.prototype.showResults = function (){
  $("#round").text(this.round);
  $("#player").text(this.name);
  $("#score").text(this.totalScore);
  $("#round-score").text(this.roundScore);
  $("#roll").text(this.roll);
}

Player.prototype.roundCheck = function () {
  if (this.round % 2 !== 0) {
    player1.showResults();
    // $(".p1").toggle();
    // $(".p2").toggle();
    console.log("ODD " + " if statement")
  // return false
} else  {
  player2.showResults();
  // $(".p1").toggle();
  // $(".p2").toggle();
  console.log("EVEN " + " else statement");
  //  return true;
  }
}



var newGame = new Game()
var player1 = new Player("Jim");
var player2 = new Player("Paul");
newGame.addPlayer(player1);
newGame.addPlayer(player2);


function incrementRound() {
  for(var i=0; i<newGame.players.length; i++) {
    newGame.players[i].round += 1;
  }
}

function rollButton() { //not working as of yet
  $("#roll1").off();
  $("#roll1").click(function(){
    this.getRoundScore();
  })
}

$(document).ready(function() {
  rollButton();
  //$("#roll1").click(function() {
  //  $("#round").text("Round: " + player1.round)
    //player1.getRoundScore();
  //  $("#round-score").text("Round Score: " + player1.roundScore);
  //  $("#roll").text("Roll Value: " + player1.roll)
  });
  $("#hold1").click(function() {
    player1.holdScore();
  //  $("#round").text("Round: " + player1.round)
  //  $("#score").text("Total Score: " + player1.totalScore);
  //  $("#round-score").text("Round Score: " + player1.roundScore);
  });
  $("#roll2").click(function() {
  //  $("#round2").text("Round: " + round)
    player2.getRoundScore();
  //  $("#round-score2").text("Round Score: " + player2.roundScore);
  //  $("#roll-2").text("Roll Value: " + player2.roll)
  });
  $("#hold2").click(function() {
    player2.holdScore();
  //  $("#round2").text("Round: " + round)
  //  $("#score2").text("Total Score: " + player2.totalScore);
  //  $("#round-score2").text("Round Score: " + player2.roundScore);
  });
//});
