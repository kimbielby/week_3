var read = require("read");

var questionsArray = []

var Question = function (text, answer, id) {
  this.text = text;
  this.answer = answer;
  this.id = id;
};

var question1 = new Question ("What is the Capital of Spain?", "Madrid", 1);
questionsArray.push (question1)
var question2 = new Question ("What is the Capital of England?", "London", 2);
questionsArray.push (question2)
var question3 = new Question ("What is the Capital of Scotland?", "Edinburgh", 3);
questionsArray.push (question3)



var Quiz = function () {
  var i = 0;

  this.start = function(){
    // options = {
    //   prompt: questionsArray[i].text
    // };
    // read(options, displayAnswer)
    // function displayAnswer(err, response) {
      console.log("The Capital is: " + response);
      if (response === questionsArray[i].answer) {
        console.log("Correct!!!");
        i += 1;
        if (i < questionsArray.length) {
          quiz.start();
        } else {
          console.log("Congratulations! You have finished the quiz!");
        }
      } else {
        console.log("Incorrect. Please try again")
        quiz.start();
      }
    }
  }
}
var quiz = new Quiz;
quiz.start();
