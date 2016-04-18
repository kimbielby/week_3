var someNumbers = "10:20:15:20:50";

function averageColon(numbers) {
  var seperatedNumbers = numbers.split(":");
  var sum = 0;
  seperatedNumbers.forEach(function (number) {
    sum += parseInt(number);
  });
  return sum/seperatedNumbers.length;
}

var results = averageColon(someNumbers);
console.log(results);
