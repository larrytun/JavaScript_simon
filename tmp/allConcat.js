var Game = require('./../js/simon.js').gameModule;

$(document).ready(function() {
  var game = new Game("game1");
  var outputArray = game.addColor();
  $("#colorOutput").text(outputArray);
});
