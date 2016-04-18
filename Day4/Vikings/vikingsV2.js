var Viking = function (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
};

var viking_olaf = new Viking("Olaf",100,23);
var viking_baelog = new Viking("Baelog",90,19);

var Saxon = function (health, strength) {
  health = function () {Math.random() * (25) + 35};
  strength = function() {Math.random() * (8) + 3};
};

var saxon1 = new Saxon(health, strength);
var saxon2 = new Saxon(health, strength);
var saxon3 = new Saxon(health, strength);

var Abbey_Fight = function (viking_1, saxon1) {
  var convo_array = [
    " - Get out of my way, puny native!!",
    " - What?? No way!! *¡¡BOOM!!*",
    " - So you want to fight, do you? Then fight we shall!!"
  ];

  this.start_fight = function () {
    var i = 0;

    function convo() {
      if (i < convo_array.length) {
        setTimeout(convo, 1500);
        console.log(convo_array[i]);
        i++;
      } else {

        if (viking_1.health > saxon1.strength && saxon1.health > viking_1.strength) {
          setTimeout(convo, 1500);
          saxon1.health = saxon1.health - viking_1.strength;
          viking_1.health = viking_1.health - saxon1.strength;
          console.log(viking_1.name + "´s Health is " + viking_1.health);
          console.log("Saxon´s Health is " + saxon1.health);
        } else {
          console.log("- The fight is now over and victory is mine!! Who will be the next foolish Saxon to get in my way??");
        }
      };
    }
    convo();
  }
};

var abbeyFight1 = new Abbey_Fight(viking_olaf, saxon1);
abbeyFight1.start_fight();



// var Pit_Fight = function (viking_1, viking_2) {
//   var intro_array = [
//     "Welcome to The Pit!",
//     "The Vikings fighting for their honour today are " + viking_1.name + " and " + viking_2.name,
//     "Are you ready????"
//   ];
//
//   this.start = function () {
//     var i = 0;
//
//     if (viking_2.health > viking_1.health) {
//       var ganador = viking_2.name
//     } else {
//       var ganador = viking_1.name
//     };
//
//     function intro() {
//       if (i < intro_array.length) {
//         setTimeout(intro, 1000);
//         console.log(intro_array[i]);
//         i++;
//       } else {
//
//           if (viking_1.health > viking_2.strength && viking_2.health > viking_1.strength) {
//             setTimeout(intro, 1000);
//             viking_2.health = viking_2.health - viking_1.strength;
//             viking_1.health = viking_1.health - viking_2.strength;
//             console.log(viking_1.name + "´s Health is " + viking_1.health);
//             console.log(viking_2.name + "´s Health is " + viking_2.health);
//           } else {
//             console.log("The fight is over and the strongest Viking is", ganador);
//           }
//         };
//       };
//     intro();
//   };
// }
//
//
// var pitFight1 = new Pit_Fight(viking_olaf, viking_baelog);
// pitFight1.start();
