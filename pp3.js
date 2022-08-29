/**
 Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
 */

let modifyArray = (arra) => {
    let sum = 0;
    for (let n of arra) {
        sum += Math.pow(n, 2);
    }
    return sum / arra.length;
}

console.log(modifyArray([1, 2, 3, 4]));