'use strict';

/*
Ask for name and favorite movie
Provide response describing goal
7 Yes/No questions
Do you  thinkg I like to travel?
Do you  think I like running?
Do you think I enjoy movies?
Do you think challenging myself excites me?
Do you think I enjoy helping others achieve their goals?
How many Ancient Wonders of the World do you think I've seen?
How many languages do you think I can speak?

*/

function intro() {
var name = prompt('What is your name?');
alert('Hello ' + name + ',' + ' very nice to meet you.' + 
' I\'m Jerod.');
console.log('Asked for their name, result : ' + name);
}
intro();

function favorite() {
var movie = prompt('What is your favorite movie?');
alert(movie + ', great movice choice.' + ' My favorite is Braveheart.');
console.log('Asked for their favorite movie, result : ' + movie);
}
favorite();

alert('I\'d like for you to get to know me better through some questions. Please answer with Yes or No');
console.log('Let them know what\'s going on');


function trips() {
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
trips();
}  

function running () {
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
running();
}

function watch() {
var movies = prompt('Do you think I like to watch movies?');
var moviesU = movies.toUpperCase();
if(moviesU === 'YES') {
  alert('Yup, you\'re right!');
} else {
  var moviesU = movies.toUpperCase();
  if(moviesU === 'NO') 
    alert('Sorry, you\'re wrong! I really enjoy movies.');
  console.log('Use if/else with' + movie + 'result depending on yes or no answers');
}
watch();
}

function push() {
var challenge = prompt('Do you think challenging myself excites me?');
var challengeU = challenge.toUpperCase();
if(challengeU === 'YES') {
  alert('You\'re correct!');
} else {
  var challengeU = challenge.toUpperCase();
  if(challengeU === 'NO') 
    alert('You\'re wrong, I like to challenge myself.');
  console.log('Use if/else with' + challenge + 'result depending on yes or no answers');
}
push();
}

function achieve() {
var goals = prompt('Do you think I like helping others achieve their goals?');
var goalsU = goals.toUpperCase();
if(goalsU === 'YES') {
  alert('You got it, I sure do');
} else {
  var goalsU = goals.toUpperCase();
  if(goalsU === 'NO') 
    alert('You are incorrect! I love helping others do so');
  console.log('Use if/else with' + goals + 'result depending on yes or no answers');
}
achieve();
}

/* Try to get them to guess the right answer
If they do not prompt will let them know too high
or too low
They have 4 tries */

function ancient() {
var wonders = prompt('How many Ancient Wonders of the World do you think I\'ve been to?');
var userWonders = parseInt(wonders);
var number_to_guess = 4;
var attempts = 3;

for(var i = 0; i < attempts; i++){
  if(userWonders === number_to_guess){
    alert(' You are right!');
    console.log('User guessed the correct, result:' + number_to_guess);
    break;

    /* Set up for loop, number that needs to be guessed, and how many attempts they get */
  }
  if(userWonders < number_to_guess){
    alert(' You are too low.');
    console.log('User guessed too low of the, result:' + number_to_guess);
    userWonders = parseInt(prompt('guess again'));
  }
  if(userWonders > number_to_guess){
    alert(' You are too high');
    console.log('User guessed too high of the, result:' + number_to_guess);
    userWonders = parseInt(prompt('guess again'));
  }
  ancient (); 
  }

}
{
  function which() {
  var speak = prompt('Which languages other than English do I speak?'); 
  var languages = ['spanish', 'mandarin'];
  var attempts = 5;

  for(var i = 0; i < attempts; i++)
  {if(languages.includes(speak))
    alert(' You are right! Spanish and Mandarin are the languages I speak');
    console.log('User guessed the correct, result:' + languages);
    break;
  
  }
  if(!languages.includes(speak)){
    prompt(' Wrong, try again.');
    console.log('User guessed wrong, result:' + languages);
  
  if(attempts > 5){
    alert('Other than English, the languages I speak are Spanish and Mandarin');
    console.log('Provide result:' + languages);
  }
  which(); 
  }

  alert('Congratulations' + name + 'You got X correct.');
  console.log('Let them know what\'s going on'); 
  
  }

}