(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var randomNumber;
var numbersArray = [];
var userArray = [];

function Game(name) {
  this.name = name;
}

Game.prototype.addColor = function() {
  randomNumber = Math.floor((Math.random() * 3) + 1);
  numbersArray.push(randomNumber);
  return numbersArray;
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

exports.gameModule = Game;

},{}],2:[function(require,module,exports){
var Game = require('./../js/simon.js').gameModule;

$(document).ready(function() {
  var game = new Game("game1");
  var outputArray = game.addColor();
  $("#colorOutput").text(outputArray);
});

},{"./../js/simon.js":1}]},{},[2]);
