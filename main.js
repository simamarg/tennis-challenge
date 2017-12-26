// Optional projects - Day 2
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
    }
    return false;
  };

  this.playerWithHighestScore = function () {
    var winner = "";
    if (this.playerOneScore > this.playerTwoScore) {
      winner = name1;
    } else if (this.playerOneScore < this.playerTwoScore) {
      winner = name2;
    }
    return winner;
  };

  this.hasWinner = function () {
    if (Math.abs(this.playerOneScore - this.playerTwoScore) >= 2) {
      return true;
    }
    return false;
  };
  
  this.hasAdvantage = function () {
     if (Math.abs(this.playerOneScore - this.playerTwoScore) === 1 && this.playerOneScore >= 3) {
      return true;
    }
    return false;
  };

  this.translateScore = function (score) {
    var translation = "";
    switch(score) {
      case 0:
        translation = 'Love';
        break;
      case 1:
        translation = 'Fifteen';
        break;
      case 2:
        translation = 'Thirty';
        break;
      case 3:
        translation = 'Forty';
        break;
    }
    return translation;
  };

  this.getScore = function () {
    var message = "";
    if (this.hasWinner()) {
      message = this.playerWithHighestScore() + " wins";
    } else if (this.hasAdvantage()) {
      message = "Advantage " + this.playerWithHighestScore();
    } else if (this.isDeuce()) {
      message = "Deuce";
    } else if (this.playerOneScore === this.playerTwoScore) {
      message = this.translateScore(this.playerOneScore) + " all";
    } else {
      message = this.translateScore(this.playerOneScore) + ", " + this.translateScore(this.playerTwoScore);
    }
    return message;
  };
};
