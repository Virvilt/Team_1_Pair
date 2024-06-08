'use strict';

for (let numbers = 1; numbers <= 10; numbers++) {
    console.log(`Voy por la vuelta ${numbers}`);
}


let acc = 0;
for (let i = 0; i < 10; i++) {
    acc += 2;
    console.log(acc);
}
console.log(`El resultado es ${acc}`);
