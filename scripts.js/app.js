import { stictEquals } from './strictEquals';

console.log(stictEquals(1, 1));
console.log('Son iguales');

console.log(stictEquals(NaN, NaN));
console.log('No son iguales, rule exception');

console.log(stictEquals(0 - 0));
console.log('Son iguales, rule exception');

console.log(stictEquals(-0, 0));
console.log('Son iguales, rule exception');

console.log(stictEquals(1, '1'));
console.log('No son iguales, uno es number y otro string');

console.log(stictEquals(true, false));
console.log('No son iguales');

console.log(stictEquals(false, false));
console.log('Son iguales');

console.log(stictEquals('water', 'oil'));
console.log('No son iguales');
