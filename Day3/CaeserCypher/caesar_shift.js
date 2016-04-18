function caesarCipher (message) {

  var numbersArray = [];
  var lettersArray = [];
  for (var i = 0; i < message.length; i++) {
    (message[i]);

     numbersArray.push(message[i].charCodeAt(0) - 3);
     lettersArray.push(String.fromCharCode(numbersArray[i]));
}


  // var phrase = message
  // //var ascii = phrase.;
  // var shift = ascii-3
  // var result =


   return lettersArray;
}

var encrypted = caesarCipher("brutus");

console.log(encrypted);
