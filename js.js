let num1 = +prompt("1 sun engisinuz");
let num2 = +prompt("2 sun engisinuz");
let tanba = prompt("tanba engiz");

function calculator(a, s, tanba) {
  while (true) {
    if (tanba == "+") {
      return a + s;
    } else if (tanba == "-") {
      return a - s;
    } else if (tanba == "*") {
      return a * s;
    } else if (tanba == "/") {
      return a / s;
    } else {
      alert("durus tanba engiz");
    }
  }
}
alert("Result is" + calculator(num1, num2, tanba));
