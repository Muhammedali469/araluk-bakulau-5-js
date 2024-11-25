// function calculator() {
//   let result = 0;

//   do {
//     let tauar = prompt("тауар аты");
//     if (tauar === "0") {
//       break;
//     }
//     let guny = +prompt("бағасы");
//     result += guny;
//   } while (true);

//   if (result >= 20000) {
//     result = result * 0.7; // 30% женілдік
//   } else if (result >= 10000) {
//     result = result * 0.8; // 20% женілдік
//   } else if (result >= 5000) {
//     result = result * 0.9; // 10% женілдік
//   }

//   return "Жалпы шығын: " + result;
// }

// alert(calculator());

////////////////////////////////////////////////////////

// let secretNumber = +prompt("sandu jaz 1-100");
// let result = 0;
// const findNumber = (secret) => {
//   while (true) {
//     let Number = +prompt("sandy boljap kor");

//     if (Number == secret) {
//       result++;
//       alert("San tabyldy");
//       break;
//     } else if (
//       secret + 1 == Number ||
//       secret + 2 == Number ||
//       secret + 3 == Number ||
//       secret + 4 == Number ||
//       secret + 5 == Number
//     ) {
//       result++;
//       alert("Сәл жоғары");
//     } else if (
//       secret - 1 == Number ||
//       secret - 2 == Number ||
//       secret - 3 == Number ||
//       secret - 4 == Number ||
//       secret - 5 == Number
//     ) {
//       result++;
//       alert("Сәл төмен");
//     } else if (secret > Number) {
//       result++;
//       alert("Жай төмен");
//     } else if (secret < Number) {
//       result++;
//       alert("Жай жоғары");
//     }
//   }
//   alert("gupia aiagtaldy" + "\n" + "осынша паытка кетті: " + result);
// };
// findNumber(secretNumber);
