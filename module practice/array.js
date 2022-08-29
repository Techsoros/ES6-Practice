let a = [2, 4, 7, 8];
let b = a.map(n => n * 3);
b.forEach(n => console.log(n));
let c = b.filter(n => n % 2 == 0);
console.log(c);
let d = c.find(n => n % 8 == 0);
console.log(d);