/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
*/

const combine = (a1, a2) => Math.max(...[...a1, ...a2]);

let a = [1, 54, 321, 6, 2];
let b = [2, 43, 6, 87, 9];
console.log(combine(a, b));