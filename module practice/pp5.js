// function makeEven(arra) {
//     for (let i = 0; i < arra.length; i++) {
//         arra[i] += 1;
//     }
// }
let arra = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
arra = arra.map(n => n + 1);

let arra2 = [33, 50, 79, 78, 90, 101, 30];
arra2 = arra2.find(n => n % 10 == 0);

console.log(arra2);