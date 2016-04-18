var Viking = function (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
};

var viking_olaf = new Viking("Olaf",10,2);
var viking_baelog = new Viking("Baelog",10,2);

var Fight = function (viking_1, viking_2) {
  this.start = function () {  
    while (viking_1.health > viking_2.strength && viking_2.health > viking_1.strength) {
      viking_2.health = viking_2.health - viking_1.strength;
      viking_1.health = viking_1.health - viking_2.strength;


      console.log(viking_1.name + "´s Health is " + viking_1.health);
      console.log(viking_2.name + "´s Health is " + viking_2.health);
    }
    console.log("Fight Over!");
  };
};


var fight1 = new Fight(viking_olaf, viking_baelog);
fight1.start();





// class of attack - vik 1 and 2
