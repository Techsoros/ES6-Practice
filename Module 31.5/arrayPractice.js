// let a = [2, 5, 3, 8, 7, 4, 12, 9, 23, 44, 76];

// let b = a.map(n => n * 5);
// let c = a.filter(n => n % 2 == 1);
// console.log(c);


const headphone = [{
        name: 'uisii c100',
        price: 1800
    },
    {
        name: 'toodoom c18',
        price: 900
    },
    {
        name: 'Cosomos',
        price: 900
    },
    {
        name: 'Remax',
        price: 5000
    },
    {
        name: 'Realme',
        price: 2000
    },
    {
        name: 'kQUZI',
        price: 5000
    },


]


const {
    price
} = headphone.find(o => o.price == 5000);
console.log(price);