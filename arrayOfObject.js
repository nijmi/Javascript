const data = [
    {
        id: 1,
        name: 'iphone11',
        category: 'phone',
        price: 2212,
        avaiability: false,
        manufactured: '22july',
        modelno: 'd12338'
    },
    {
        id: 2,
        name: 'iphone13',
        category: 'phone',
        price: 1912,
        avaiability: false,
        manufactured: '22jan',
        modelno: 'r1548'
    },
    {
        id: 3,
        name: 'iphoneXR',
        category: 'phone',
        price: 700,
        avaiability: true,
        manufactured: '2oct',
        modelno: 'e654'
    },
    {
        id: 4,
        name: 'iphone16',
        category: 'phone',
        price: 3254,
        avaiability: true,
        manufactured: '2sep',
        modelno: 'b8765'
    }
];

const result = data
    .filter(item => item.avaiability)
    .map(item => item.price)
    .reduce((acc, curr) => acc * curr, 1);

console.log(result);


