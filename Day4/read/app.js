var fs = require('fs');

function print(error,content) {
  if (error) {
    console.log("oh no! Error!", error);
  } else {
    console.log("Success!", content);
  }

};

fs.readFile("sssjs.txt","utf-8",print);
