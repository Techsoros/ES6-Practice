const people = [{
        name: 'meena',
        age: 20
    },
    {
        name: 'Rina',
        age: 15
    },
    {
        name: 'Lina',
        age: 22
    }

]
// traditional way
let sum = 0;
for (let i = 0; i < people.length; i++) {
    sum += people[i].age;

}
console.log(`Sum using tradition Loop = ${sum}`);
sum = 0;

// sum using forOf
for (let p of people) {
    sum += p.age;

}
console.log(`Sum using For of Loop = ${sum}`);
sum = 0;

// sum using reduce
sum = people.reduce((acm, para) => acm + para.age, 0);
console.log(`Sum using reduce = ${sum}`);
sum = 0;