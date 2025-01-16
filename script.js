function toggleCalculator() {
  const calculator = document.getElementById("calculator");
  const toggleLink = document.querySelector(".toggle-link");
  if (calculator.style.display === "none" || !calculator.style.display) {
    calculator.style.display = "inline-block";
    toggleLink.textContent = "Faire disparaître la calculatrice";
  } else {
    calculator.style.display = "none";
    toggleLink.textContent = "Faire apparaître la calculatrice";
  }
};

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultElement = document.getElementById("result");

  let result;
  if (isNaN(num1) || isNaN(num2)) {
    result = "Veuillez entrer des nombres valides.";
  } else {
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Division par zéro impossible";
        break;
      default:
        result = "Opération inconnue";
    }
  }

  resultElement.textContent = `Résultat : ${result}`;
};

//Exercice 3
const inputLeft = document.querySelector("#num1");
const inputRight =document.querySelector("#num2");
const operation =document.querySelector("#operation");
const infoball = document.querySelector(".survol");

inputLeft.addEventListener("mouseover", () => {
  infoball.textContent = "Insérez une valeur";
});

inputRight.addEventListener("mouseover", () => {
    infoball.textContent = "Insérez une valeur";
  });

  operation.addEventListener("mouseover", () => {
    infoball.textContent = "Selectionner un opérateur";
  });