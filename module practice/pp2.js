/** *****************************************
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
************************************************************/

const evenLength = (arra) => {
    let a = [];
    for (let name of arra) {
        if (name.length % 2 == 0) {
            a.push(name);
        }


    }
    return a;
}

let names = ['Hashim', 'mishu', 'sonia', 'mimi', 'sujon', 'riaz', 'sakib', 'anas'];
console.log(...evenLength(names));