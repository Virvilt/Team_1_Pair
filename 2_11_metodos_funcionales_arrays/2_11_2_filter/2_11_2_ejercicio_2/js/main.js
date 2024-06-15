'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];

const userOK = pins.filter(pinsElement => pinsElement % 2 === 0);
console.log(userOK);