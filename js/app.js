'use strict';

/*
Ask for name and favorite movie
Provide response describing goal
5 Yes/No questions
Do you  thinkg I like to travel?
Do you  think I like running?
Do you think I enjoy movies?
Do you think challenging myself excites me?
Do you think I enjoy helping others achieve their goals?

*/

var name = prompt('What is your name?');
alert('Hello ' + name + ',' + ' very nice to meet you.' + 
' I\'m Jerod.');
console.log('Asked for their name, result : ' + name);

var movie = prompt('What is your favorite movie?');
alert(movie + ', great movice choice.' + ' My favorite is Braveheart.');
console.log('Asked for their favorite movie, result : ' + movie);

alert('I\'d like for you to get to know me better through some questions. Please answer with Yes or No');
console.log('Let them know what\'s going on');

var travel = prompt('Do you think I enjoy travelling?');
var travelU = travel.toUpperCase();
if(travelU === 'YES') {
  alert('You\'re right!');
} else {
  var travelU = travel.toUpperCase();
  if(travelU === 'NO') 
  alert('You\'re wrong!');
  console.log('Use if/else with' + travel + 'depending on yes or no answers');
}

var run = prompt('Do you think I like to run?');
var runU = run.toUpperCase();
if(runU === 'YES') {
  alert('You\'re right!');
} else {
  var runU = run.toUpperCase();
  if(runU === 'NO') 
  alert('You\'re wrong! I love running');
  console.log('Use if/else with' + run + 'result depending on yes or no answers');
}

var movies = prompt('Do you think I like to watch movies?');
var moviesU = run.toUpperCase();
if(moviesU === 'YES') {
  alert('Yup, you\'re right!');
} else {
  var moviesU = movies.toUpperCase();
  if(moviesU === 'NO') 
  alert('Sorry, you\'re wrong! I really enjoy movies.');
  console.log('Use if/else with' + movie + 'result depending on yes or no answers');
}

var challenge = prompt('Do you think challenging myself excites me?');
var challengeU = run.toUpperCase();
if(challengeU === 'YES') {
  alert('You\'re correct!');
} else {
  var challengeU = movies.toUpperCase();
  if(challengeU === 'NO') 
  alert('You\'re wrong, I like to challenge myself.');
  console.log('Use if/else with' + challenge + 'result depending on yes or no answers');
  
}

var goals = prompt('Do you think I like helping others achieve their goals?');
var goalsU = travel.toUpperCase();
if(goalsU === 'YES') {
  alert('You got it, I sure do');
} else {
  var goalsU = goals.toUpperCase();
  if(goalsU === 'NO') 
  alert('You are incorrect! I love helping others do so');
  console.log('Use if/else with' + goals + 'result depending on yes or no answers');

}