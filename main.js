document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let num1 = document.getElementById("num1-in").value;
  let num2 = document.getElementById("num2-in").value;

  // Calculation

  let total = Math.sqrt(num1 ** 2 + num2 ** 2);

  // Output
  document.getElementById("output").innerHTML = total;
}
