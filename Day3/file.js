var exampleArray = [2, -5, 10, 5, 4, -10, 0 ];


//EX 1
function eat (food) {
  console.log("Eating some " + food);
}

eat("pizza");

// EX 2
var foods = ["pizza","cookies","bread"];

foods.forEach(function (food) {
  console.log(food);
});


// EX 3
var foods = ["pizza","cookies","bread"];

var capsFoods = foods.map(function (food) {
  return food.toUpperCase();
});

console.log(capsFoods);


// EX 4
var foods = ["pizza","cookies","bread"];

var msg = foods.reduce(function(pre, food) {
  return pre + " AND " + food;
});

console.log(msg);


//EX 5
var foods = ["pizza","cookies","soup"];

var bestFood = foods.filter(function (food) {
  return food != "soup";
});

console.log(bestFood);
