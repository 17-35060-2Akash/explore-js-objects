const numbers = [12, 54, 65, 3, 54];
/* for (const number of numbers) {
    console.log(number);
} */

const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}

/* const keys = Object.keys(bottle);
for (const key of keys) {
    console.log(`${key} : ${bottle[key]}`);
} */

/* for (const index in numbers) {
    console.log(numbers[index]);
} */

/* for (const key in bottle) {
    console.log(key);
} */

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

console.log(Object.entries(bottle));