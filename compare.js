const first = { a: 2 };
const second = first;

if (first == second) {
    console.log('same');
}
else {
    console.log('different');
}
second.a = 3;
console.log(first, second);