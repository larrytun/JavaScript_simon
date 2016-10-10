var randomNumber;
var numbersArray = [];
var userArray = [];

function Game(name) {
  this.name = name;
}

Game.prototype.addColor = function() {
  randomNumber = Math.floor((Math.random() * 3) + 1);
  numbersArray.push(randomNumber);
}

Game.prototype.addUserColor = function(number) {
  userArray.push(number);
}

Game.prototype.compareArrays = function() {
  var userEntryString = userArray.toString();
  var gameEntryString = numbersArray.toString();
  if (userEntryString === gameEntryString) {
    return true;
  } else {
    return false;
  }
}
