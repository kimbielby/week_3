// 1
var animal = {
  name: "Shadow",
  noise: "Brrrr",

  shout: function () {
    console.log("Mooooo!");
  },
  makeNoise: function () {
    // console.log(animal.noise + "!!!!") //Alternative
    console.log(this.noise + "!!!!")
  }
};

animal.makeNoise();

//2

var Animal = function (name, noise) {
  this.name = name;
  this.noise = noise;
};

Animal.prototype.makeNoise = function () {
  console.log(this.noise + "!!!!!");
};

var animal = new Animal("Buk","Brrrr!!!");
var anotherAnimal = new Animal("ououououou","pfffffff");


animal.makeNoise();
anotherAnimal.makeNoise();
