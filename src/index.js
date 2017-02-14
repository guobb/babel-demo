import 'babel-polyfill';

Array.from('aaaa');

const sum = (a, b) => a + b;

let x = sum(3,5);
let y = sum(3,5);

console.log(x,y);