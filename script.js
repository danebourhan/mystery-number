const result = document.getElementById("result");
const btn = document.getElementById("btn");
const replayBtn = document.getElementById("replayBtn");
let number = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let timeoutId;

console.log(number);

function numberTest() {
  const userInput = parseInt(document.getElementById("userInput").value);
  let output = "";
  attempts++;
  let attemptText = attempts === 1 ? "1er essai" : `${attempts}ème essai`;
  clearTimeout(timeoutId);

  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    output = "<hr><h5>Veuillez saisir un nombre valide entre 1 et 10.</h5>";
    result.innerHTML += output;
    btn.disabled = true;
    replayBtn.classList.remove("d-none");
    return; // Sortie de la fonction si la saisie n'est pas valide
  }

  if (userInput === number) {
    timeoutId = setTimeout(function () {
      output = `<p><h4>Gagné ! 🙂</h4> <br> Le numéro mystère était : ${number}</p>`;
      replayBtn.classList.remove("d-none");
      btn.disabled = true;
    }, 1000);
  } else if (userInput > number) {
    output = `<p>${userInput} ? ... c'est ➖</p>`;
  } else {
    output = `<p>${userInput} ? ... c'est ➕</p>`;
  }

  result.innerHTML += `<hr><p><h5>${attemptText}</h5></p><br>`;
  timeoutId = setTimeout(function () {
    result.innerHTML += output;
  }, 1000);

  if ((attempts >= 3 && userInput !== number) || attempts >= 3) {
    timeoutId = setTimeout(function () {
      result.innerHTML += `<p><h4>Perdu...☹️</h4></p><p>Le numéro mystère était : ${number}</p>`;
      btn.disabled = true;
      replayBtn.classList.remove("d-none");
    }, 1000);
  }

  if (attempts >= 3) {
    btn.disabled = true;
  }
}

replayBtn.addEventListener("click", function () {
  location.reload();
});

btn.addEventListener("click", numberTest); 