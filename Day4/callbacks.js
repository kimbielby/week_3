// function shout () {
//   console.log("Ahhhhhhhhhhh!");
// };
//
// setTimeout(shout,2000);

// EX 1
function blastoff (seconds) {
  function countdown() {
    console.log(seconds);
    seconds -= 1;
    if (seconds >= 0) {
      setTimeout (countdown,1000);
    } else {
      console.log("blast off!");
    }

  }
  countdown();

};

blastoff (5)


// // Ex 2 - INCORRECT
// function waiting() {
//   console.log("It's been 10 seconds");
//   setTimeout (waiting,10000);
// }
// waiting();

// //EX 2 - MORE CORRECT
// function sleep(seconds,message) {
//
// };
