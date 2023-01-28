const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}

const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);

const keyValuePair = Object.entries(bottle);
// console.log(keyValuePair);

console.log(bottle);
Object.seal(bottle);
bottle.price = 100;
bottle.Quantity = 40;
delete bottle.isCleaned;
console.log(bottle);
