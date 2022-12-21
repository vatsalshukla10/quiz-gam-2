var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is you name");
console.log("welcome "+ userName +" to the quiz game");

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Right");
    console.log("--------------------");
    score = score+1;
  }
  else{
    console.log("wrong");
    console.log("--------------------");
  } }

var questions = [{
  question : "How many Infinity Stones are there?",
  answer : "six"
},{
  question : "Who is Tony Stark’s father?",
  answer : "howard stark"
},{
  question : "What type of doctor is Doctor Strange?",
  answer : "A neurosurgeon"  
},{
  question : "Who was able to pick up Thor’s hammer in Endgame?",
  answer : "Captain America"
},{
  question : "On what planet was the Soul Stone in Infinity War?",
  answer : "Vormir"
} ];

for(i=0;i<questions.length;i++){
var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("your score out 5 is "+ score);