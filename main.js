//write your code here to make the tests pass
var TennisGame = function (name1, name2) {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;

  this.playerOneScores = function() {
    this.playerOneScore++;
  };
  this.playerTwoScores = function() {
    this.playerTwoScore++;
  };
  this.isDeuce = function () {
      if (this.playerOneScore === this.playerTwoScore && this.playerOneScore >=3) {
        return true;
      }
      return false;
  };
  this.playerWithHighestScore = function () {
    if (this.playerOneScore > this.playerTwoScore) {
      return name1;
    }
    if (this.playerTwoScore > this.playerOneScore) {
       return name2;
    }
  };
  this.hasWinner = function () {
    if ((this.playerOneScore > 3 && this.playerTwoScore <3) || (this.playerTwoScore > 3 && this.playerOneScore < 3)) {
      return true;
    }
    return false;
  };
  this.hasAdvantage = function () {
      if (((this.playerOneScore >= 3) && (this.playerTwoScore === (this.playerOneScore + 1))) || (this.playerTwoScore >= 3) && (this.playerTwoScore === (this.playerOneScore + 1))) {
        return true;
    }
    return false;
  };
  this.translateScore = function (score) {
    if (score === 0)
    {
      return "Love";
    }
    if (score === 1) {
      return "Fifteen";
    }
    if (score === 2) {
      return "Thirty";
    }
    if (score === 3) {
      return "Forty";
    }
    if (score === 4) {
      return "Win";
    }
  };
  this.getScore = function () {
      if (this.hasWinner()) {
         return(this.playerWithHighestScore()+ " wins");
      }
      if (this.isDeuce()) {
        return "Deuce";
      }
      if ((this.playerOneScore === this.playerTwoScore) && this.playerOneScore < 3) {
        return this.translateScore(this.playerOneScore) + " all";
      }
      if (this.hasAdvantage()) {
        return("Advantage "+ this.playerWithHighestScore());
      }
      return(this.translateScore(this.playerOneScore) + ", "+ this.translateScore(this.playerTwoScore));
  };
};
