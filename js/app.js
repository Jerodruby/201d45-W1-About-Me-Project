'use strict';

/*
Ask for name and favorite movie
Provide response describing goal
5 Yes/No questions
Do you like to travel?
Do you like running?
Do you enjoy movies?
Does challenging yourself excite you?
Do you enjoy helping others achieve their goals?

*/

var name = prompt('What is your name?');
alert('Hello ' + name + ',' + ' very nice to meet you.' + 
' I\'m Jerod.');
console.log('Asked for their name, result : ' + name);

var movie = prompt('What is your favorite movie?');
alert(movie + ', great movice choice.' + ' My favorite is Braveheart.');
console.log('Asked for their favorite movie, result : ' + movie);

alert('I\'d like for you to get to know me better through some questions');
console.log('Let them know what\'s going on');

var travel = prompt('Do you think I enjoy travelling?');
var travelU = travel.toUpperCase();
if(travelU === 'YES') {
  alert('You\'re right!');
} else {
  var travelU = travel.toUpperCase();
  if(travelU === 'NO') 
  alert('You\'re wrong!');
  console.log('Use if/else with result depending on yes or no answers');
}

var run = prompt('Do you think I like to run?');
var runU = run.toUpperCase();
if(runU === 'YES') {
  alert('You\'re right!');
} else {
  var runU = run.toUpperCase();
  if(runU === 'NO') 
  alert('You\'re wrong! I love running');
  console.log('Use if/else with result depending on yes or no answers');
}

