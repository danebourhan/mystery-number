// var secretNumber = 7; // Le numéro mystère à deviner
// var chancesLeft = 3; // Le nombre de chances restantes

// function checkGuess() {
//   var guess = parseInt(document.getElementById("guessInput").value);
//   var resultElement = document.getElementById("result");
//   var chancesElement = document.getElementById("chances");

//   if (guess === secretNumber) {
//     resultElement.innerHTML = "Félicitations ! Vous avez deviné le numéro mystère !";
//     chancesElement.innerHTML = "";
//   } else {
//     chancesLeft--;
//     if (chancesLeft > 0) {
//       var hint = "";
//       if (guess < secretNumber) {
//         hint = "Le numéro mystère est plus grand.";
//       } else {
//         hint = "Le numéro mystère est plus petit.";
//       }
//       resultElement.innerHTML = "Désolé, ce n'est pas le numéro mystère. " + hint + " Essayez encore !";
//       chancesElement.innerHTML = "Il vous reste " + chancesLeft + " chance(s).";
//       document.getElementById("guessInput").value = "";
//     } else {
//       resultElement.innerHTML = "Désolé, vous avez épuisé toutes vos chances. Le numéro mystère était " + secretNumber + ".";
//       chancesElement.innerHTML = "";
//       document.getElementById("guessInput").disabled = true;
//     }
//   }
// }


var secretNumber;
var attempts = 0;

function generateSecretNumber() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  var resultElement = document.getElementById("result");
  var chancesElement = document.getElementById("chances");

  if (guess === secretNumber) {
    resultElement.textContent = "Félicitations ! Vous avez deviné le numéro mystère !";
    resetGame();
  } else {
    attempts++;
    var hint = guess < secretNumber ? "Le numéro mystère est plus grand." : "Le numéro mystère est plus petit.";
    resultElement.textContent = "Désolé, ce n'est pas le numéro mystère. " + hint + " Essayez encore !";

    if (attempts === 1) {
      document.getElementById("attemptLine1").style.backgroundColor = "#000";
    } else if (attempts === 2) {
      document.getElementById("attemptLine2").style.backgroundColor = "#000";
    } else if (attempts >= 3) {
      document.getElementById("attemptLine3").style.backgroundColor = "#000";
      resultElement.textContent = "Désolé, vous avez épuisé toutes vos chances. Le numéro mystère était " + secretNumber + ".";
      resetGame();
    }
  }

  document.getElementById("guessInput").value = "";
}

function resetGame() {
  attempts = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("chances").textContent = "";
  document.getElementById("attemptLine1").style.backgroundColor = "transparent";
  document.getElementById("attemptLine2").style.backgroundColor = "transparent";
  document.getElementById("attemptLine3").style.backgroundColor = "transparent";
  generateSecretNumber();
}

generateSecretNumber();
document.getElementById("guessButton").addEventListener("click", checkGuess);
