var Viking = function (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
};

var viking_olaf = new Viking("Olaf",100,3);
var viking_baelog = new Viking("Baelog",90,2);

var Fight = function (viking_1, viking_2) {

  var intro_array = [
    "Welcome to The Pit!",
    "The Vikings fighting for their honour today are " + viking_1.name + " and " + viking_2.name,
    "Are you ready????"
  ];

  this.start = function () {
    var i = 0;

    if (viking_2.health > viking_1.health) {
      var ganador = viking_2.name
    } else {
      var ganador = viking_1.name
    };

    function intro() {
      if (i < intro_array.length) {
        setTimeout(intro, 1000);
        console.log(intro_array[i]);
        i++;
      } else {

          if (viking_1.health > viking_2.strength && viking_2.health > viking_1.strength) {
            setTimeout(intro, 1000);
            viking_2.health = viking_2.health - viking_1.strength;
            viking_1.health = viking_1.health - viking_2.strength;
            console.log(viking_1.name + "´s Health is " + viking_1.health);
            console.log(viking_2.name + "´s Health is " + viking_2.health);
          } else {
            console.log("The fight is over and the strongest Viking is", ganador);

          }
        };
      };
    intro();
  };
}


var fight1 = new Fight(viking_olaf, viking_baelog);
fight1.start();
