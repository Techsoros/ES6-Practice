const avg = (n1, n2) => parseFloat(((n1 + n2) / 2).toFixed(2));
const man = {
    name: 'zihad',
    age: 14,
    device: ['realme', 'Asus', 'uisii'],
    marks: {
        ssc: 4.69,
        hsc: 5.00,
        graduation: {
            l1: avg(3.29, 2.56),
            l2: avg(2.42, 3.19),
            l3: avg(2.93, 3.30),
            l4: avg(3.56, 3.00),
            fail: ['C-theory', 'microprocessor', {
                java: 'lab',
                oop: 'theory'
            }]
        }
    }

}
let arra = Object.values(man.marks.graduation);
arra.pop();
let total = arra.reduce((acm, para) => para + acm, 0)
console.

console.log(total / 4);