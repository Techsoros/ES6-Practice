const devide5 = n => Math.floor((n / 5));
const multiply = (n1 = 0, n2 = 1, n3 = 1) => n1 * n2 * n3;
const calculate = (n1, n2) => (n1 + 2) * (n2 + 2);

const zihad = {
    name: 'Ferdous Zihad',
    designation: 'Software Engineer'
};

console.log(`
Name :  ${zihad.name};
He is a ${zihad.designation};
`);


console.log(multiply(8, 4));