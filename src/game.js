const data = [
  {
    name: "functionElement",
    img: "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
    defeats: {
      variable:
        "Function executes code and defeats Variable: Functions win against Variables because they can execute code and operate on Variables.",
      object:
        "Function executes code and defeats Object: Functions win against Objects because they can execute code and operate on Objects.is defeated by Function.",
      string:
        "Function executes code and defeats String: Functions win against Strings because they can execute code and perform operations beyond just manipulating textual data.",
    },
  },
  {
    name: "methodElement",
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75",
    defeats: {
      function:
        "Method manipulates Objects and defeats Function: Methods win against Functions because they can manipulate Objects and invoke Functions.",
      variable:
        "Method manipulates Objects and defeats Variable: Methods win against Variables because they can manipulate Objects and invoke Functions.",
    },
  },
  {
    name: "objectElement",
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75",
    defeats: {
      method:
        "Object contains Variables and defeats Method: Objects win against Methods because they can contain Variables and manipulate their values.",
      function:
        "Object contains Variables and defeats Function: Objects win against Functions because they can contain Variables and manipulate their values.",
    },
  },
  {
    name: "variableElement",
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75",
    defeats: {
      object:
        "Variable stores data and defeats Object: Variables win against Objects because they can store different types of data and represent various entities.ariable stores data and defeats Object.",
      method:
        "Variable stores data and defeats Method: Variables win against Methods because they can store different types of data and represent various entities.",
    },
  },
  {
    name: "stringElement",
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75",
    defeats: {
      variable:
        "String represents textual data and defeats Variable: Strings win against Variables because they can store and manipulate textual data.",
      method:
        "Variable stores data and defeats Method: Variables win against Methods because they can store different types of data and represent various entities.",
      object:
        "String represents textual data and defeats Object: Strings win against Objects because they can store and manipulate textual data.",
    },
  },
];

class Game {
  constructor() {
    this.startGame = document.getElementById("start-game");
    this.insideGame = document.getElementById("inside-game");
    this.endGame = document.getElementById("end-game");
    this.startButton = document.getElementById("start-game-button");
    this.restartButton = document.getElementById("restart-game-button");
    this.choicesButtons = document.getElementById("button-container");
    this.choices = ["Function", "Method", "Object", "Variable", "String"];
    this.userChoice = "";
    this.botChoice =
      this.choices[Math.floor(Math.random() * this.choices.length)];
    this.resultMessage = document.getElementById("result-message");
    this.resultTie = 0;
    this.resultMachine = 0;
    this.resultPlayer = 0;
    this.resultPlayerElement = document.getElementById("player-result-element");
    this.resultMachineElement = document.getElementById(
      "machine-result-element"
    );
    this.resultTieElement = document.getElementById("tie-result-element");
  }

  handleGameStart() {
    this.startGame.style.display = "none";
    this.insideGame.style.display = "block";
    this.endGame.style.display = "none";
    this.resultTie = 0;
    this.resultMachine = 0;
    this.resultPlayer = 0;
  }

  handleGameEnd() {
    if (
      this.resultTie === 2 ||
      this.resultPlayer === 2 ||
      this.resultMachine === 2
    ) {
      this.resultTie = 0;
      this.resultPlayer = 0;
      this.resultMachine = 0;
      this.resultPlayerElement.innerHTML = 0;
      this.resultMachineElement.innerHTML = 0;
      this.resultTieElement.innerHTML = 0;
      this.startGame.style.display = "block";
      this.endGame.style.display = "none";
      this.insideGame.style.display = "none";
      // this.choicesButtons.style.display = "none";
      this.resultMessage.innerHTML = "This is the end-result.";
      this.resultMessage.style.color = "blue";
      // this.handleGameStart();
    }
  }

  handleUserChoice(choice) {
    console.log(this.userChoice, this.botChoice);
    this.userChoice = choice;
    this.botChoice =
      this.choices[Math.floor(Math.random() * this.choices.length)];
    this.handleGameResult();
    this.handleGameEnd();
  }

  handleGameResult() {
    if (this.botChoice === this.userChoice) {
      this.resultMessage.innerHTML = "Nobody wins! The terms are equal.";
      this.resultMessage.style.color = "gray";
      this.resultTie++;
      this.resultTieElement.innerHTML = this.resultTie;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[0] &&
      this.botChoice === this.choices[1]
    ) {
      this.resultMessage.innerHTML = `${data[1].defeats.function}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[0] &&
      this.botChoice === this.choices[2]
    ) {
      this.resultMessage.innerHTML = `${data[0].defeats.object}`;
      this.resultMessage.style.color = "green";
      this.Player++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[0] &&
      this.botChoice === this.choices[3]
    ) {
      this.resultMessage.innerHTML = `${data[0].defeats.variable}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[0] &&
      this.botChoice === this.choices[4]
    ) {
      this.resultMessage.innerHTML = `${data[0].defeats.string}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[1] &&
      this.botChoice === this.choices[0]
    ) {
      this.resultMessage.innerHTML = `${data[1].defeats.function}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[1] &&
      this.botChoice === this.choices[2]
    ) {
      this.resultMessage.innerHTML = `${data[2].defeats.method}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[1] &&
      this.botChoice === this.choices[3]
    ) {
      this.resultMessage.innerHTML = `${data[1].defeats.variable}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[1] &&
      this.botChoice === this.choices[4]
    ) {
      this.resultMessage.innerHTML = `${data[4].defeats.method}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[2] &&
      this.botChoice === this.choices[0]
    ) {
      this.resultMessage.innerHTML = `${data[2].defeats.function}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[2] &&
      this.botChoice === this.choices[1]
    ) {
      this.resultMessage.innerHTML = `${data[2].defeats.method}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[2] &&
      this.botChoice === this.choices[3]
    ) {
      this.resultMessage.innerHTML = `${data[3].defeats.object}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[2] &&
      this.botChoice === this.choices[4]
    ) {
      this.resultMessage.innerHTML = `${data[4].defeats.object}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[3] &&
      this.botChoice === this.choices[0]
    ) {
      this.resultMessage.innerHTML = `${data[0].defeats.variable}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[3] &&
      this.botChoice === this.choices[1]
    ) {
      this.resultMessage.innerHTML = `${data[3].defeats.method}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[3] &&
      this.botChoice === this.choices[2]
    ) {
      this.resultMessage.innerHTML = `${data[3].defeats.object}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[3] &&
      this.botChoice === this.choices[4]
    ) {
      this.resultMessage.innerHTML = `${data[4].defeats.variable}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[4] &&
      this.botChoice === this.choices[0]
    ) {
      this.resultMessage.innerHTML = `${data[0].defeats.string}`;
      this.resultMessage.style.color = "red";
      this.resultMachine++;
      this.resultMachineElement.innerHTML = this.resultMachine;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[4] &&
      this.botChoice === this.choices[1]
    ) {
      this.resultMessage.innerHTML = `${data[4].defeats.method}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[4] &&
      this.botChoice === this.choices[2]
    ) {
      this.resultMessage.innerHTML = `${data[4].defeats.object}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    } else if (
      this.userChoice === this.choices[4] &&
      this.botChoice === this.choices[3]
    ) {
      this.resultMessage.innerHTML = `${data[4].defeats.variable}`;
      this.resultMessage.style.color = "green";
      this.resultPlayer++;
      this.resultPlayerElement.innerHTML = this.resultPlayer;
      console.log(this.resultMessage.innerHTML);
    }
  }
}

const game = new Game();

const startButton = document.getElementById("start-game-button");
startButton.addEventListener("click", () => {
  game.handleGameStart();
});

const restartButton = document.getElementById("restart-game-button");
restartButton.addEventListener("click", () => {
  game.handleGameStart();
});

const choicesButtons = document.querySelectorAll(
  "#function-btn, #method-btn, #object-btn, #variable-btn, #string-btn"
);

choicesButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    game.handleUserChoice(event.target.textContent);
  });
});

// setResult() {
//   if (this.userChoice === this.botChoice) {
//     this.resultMessage = "Tie!";
//     result = "gray";
//     resultTie++;
//     strength++
//   } else if (this.userChoice === this.choices[0] && this.botChoice ===  this.choices[1]) {
//   result.textContent = data[1].defeats.variable;
//   result.style.color = "green";
//   resultYou++;
//   } else if (this.userChoice === this.choices[0] && this.botChoice === this.choices[2]) {
//   result.textContent = data[0].defeats.variable;
//   result.style.color = "green";
//   resultYou++;
//   } else if (this.userChoice === this.choices[1] && this.botChoice === this.choices[3]) {
//   result.textContent = data[0].defeats.variable;
//   result.style.color = "green";
//   resultYou++;
//   }
// }

// function generateChoice(choice) {
//   const gameButton = document.getElementById("#function-btn", "#method-btn", "#object-btn", "#variable-btn", "#string-btn");
//   gameButton.addEventListener("click", function () {
//     function doGenerate ();
//   });

//   generateChoice (doGenerate) {
//     const myChoice = choice.id;
//     const botChoice = ["function", "method", "object", "variable", "string"][
//       Math.floor(Math.random() * 5)
//     ];

//     const imgDB = {
//       function: document.getElementById("function").src,
//       method: document.getElementById("method").src,
//       object: document.getElementById("object").src,
//       variable: document.getElementById("variable").src,
//       string: document.getElementById("string").src,
//     }

//     const myResult = document.getElementById("myResult");
//     const botResult = document.getElementById("botResult");
//     const msgResult = document.getElementById("msgResult");

//     myResult.innerhtml = `<img src="${myChoice}"`;
//     document.getElementsByClassName("result-message").appendChild(myResult);
//     }
//     if (myChoice === botChoice) {
//         let result = document.getElementById('#result-message');
//         result.textContent = "Tie!";
//         result.style.color = "green";
//         resultYou++;
//     } else if (myChoice === "function" && botChoice === "variable") {
//         let result = document.getElementById('#result-message');
//         result.textContent = data[0].defeats.variable;
//         result.style.color = "green";
//         resultYou++;
//     } else if (myChoice === "function" && botChoice === "method") {
//         let result = document.getElementById('#result-message');
//         result.textContent = data[1].defeats.function;
//         result.style.color = "red";
//       resultMachine++;
//     } else if (myChoice === "object" && botChoice === "string") {
//         let result = document.getElementById('#result-message');
//         result.textContent = data[0].defeats.variable;
//         result.style.color = "green";
//         resultYou++;
//       resultYou++;
//     } else if (myChoice === "string" && botChoice === "variable") {
//       msgResult.innerhtml =
//         "<h1>'String stores Text and defeats Variables: Strings win against Variables because they can store and represent textual data.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "String stores Text and defeats Variables: Strings win against Variables because they can store and represent textual data."
//         );   // DONE
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "variable" && botChoice === "method") {
//       msgResult.innerhtml =
//         "<h1>'Variable stores Values and defeats Methods: Variables win against Methods because they can store and manipulate different types of data.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Variable stores Values and defeats Methods: Variables win against Methods because they can store and manipulate different types of data." // DONE
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "variable" && botChoice === "object") {
//       msgResult.innerhtml =
//         "<h1>'Variables win against Objects because they can store different types of data and represent various entities.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Variables win against Objects because they can store different types of data and represent various entities."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "variable" && botChoice === "string") {
//       msgResult.innerhtml =
//         "<h1>'Variables win against Strings because they can store different types of data and represent various entities.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Variables win against Strings because they can store different types of data and represent various entities." // DONE
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "method" && botChoice === "variable") {
//       msgResult.innerhtml =
//         "<h1>'Method manipulates Objects and defeats Variables: Methods win against Variables because they can manipulate Objects and invoke Functions.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Method manipulates Objects and defeats Variables: Methods win against Variables because they can manipulate Objects and invoke Functions."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "object" && botChoice === "method") {
//       msgResult.innerhtml =
//         "<h1>'Object contains Properties and defeats Methods: Objects win against Methods because they can store and manipulate data through Properties.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Object contains Properties and defeats Methods: Objects win against Methods because they can store and manipulate data through Properties."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "string" && botChoice === "method") {
//       msgResult.innerhtml =
//         "<h1>'String stores Text and defeats Methods: Strings win against Methods because they can store and represent textual data.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "String stores Text and defeats Methods: Strings win against Methods because they can store and represent textual data."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "method" && botChoice === "object") {
//       msgResult.innerhtml =
//         "<h1>'Methods win against Objects/Strings because they can manipulate Objects and invoke Functions.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Methods win against Objects because they can manipulate Objects and invoke Functions."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "method" && botChoice === "string") {
//       msgResult.innerhtml =
//         "<h1>'Methods win against Strings because they can manipulate Objects and invoke Functions.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Methods win against Strings because they can manipulate Objects and invoke Functions."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "object" && botChoice === "variable") {
//       msgResult.innerhtml =
//         "<h1>'Object contains Properties and defeats Variables: Objects win against Variables because they can store and manipulate data through Properties.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "Object contains Properties and defeats Variables: Objects win against Variables because they can store and manipulate data through Properties."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     } else if (myChoice === "string" && botChoice === "variable") {
//       msgResult.innerhtml =
//         "<h1>'String stores Text and defeats Variables: Strings win against Variables because they can store and represent textual data.'</h1>";
//       // document.getElementsByClassName('result-message').appendChild(msgResult);
//       document
//         .querySelector("#result-message")
//         .innerhtml.replace(
//           "Tic, Tac, Toe - JavaScript Edition",
//           "String stores Text and defeats Variables: Strings win against Variables because they can store and represent textual data."
//         );
//       document.querySelector("#result-message").style.color = "green";
//       resultYou++;
//     }

//     botResult.innerhtml = `<img src="${botChoice}`;
//     document.getElementsByClassName("result-message").appendChild(botResult);

//     document.querySelector("#score-tie").textContent = resultTie;
//     document.querySelector("#score-you").textContent = resultYou;
//     document.querySelector("#score-machine").textContent = resultMachine;
