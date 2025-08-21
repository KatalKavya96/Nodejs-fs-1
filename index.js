//I want to create a file and write content inside it//

const fs = require("fs")
const {Add, mul} = require("./localmodule")
const random = require("./local")

fs.writeFileSync("note.txt","First Learn")

const result1  = Add(5,6)
const result2 = mul(1,2)

console.log(result1,result2)
console.log(random())

// Figlet

const figlet = require("figlet")

figlet.text(
  "Boo!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);