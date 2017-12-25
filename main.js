//write your code here to make the tests pass
var TennisGame = function (name1, name2) {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;

  this.playerOneScores = function () {
    this.playerOneScore++;
  };
  this.playerTwoScores = function () {
    this.playerTwoScore++;
  };

  this.isDeuce = function () {
    if (this.playerOneScore >= 3 && this.playerOneScore === this.playerTwoScore) {
      return true;
    } else {
      return false;
    }
  };

  this.playerWithHighestScore = function () {
    if (this.playerOneScore > this.playerTwoScore) {
      return name1;
    } else {
      return name2;
    }
  };

  this.hasWinner = function () {

  };
  this.hasAdvantage = function () {

  };
  this.translateScore = function (score) {

  };
  this.getScore = function () {

  };
};
