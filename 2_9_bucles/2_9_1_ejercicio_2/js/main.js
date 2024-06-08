'use strict';

const numbers = [6, 8, 4, 9, 6, 8, 10, 5, 6];

/*let acumulador = 0;

 for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    acumulador += numbers[i];
}

const media = acumulador / numbers.length;
console.log(media);  */

//-----------------------

function average(numbers) {
    let acumulador = 0;
    for (let i = 0; i < numbers.length; i++) {
        // console.log(i);
        acumulador += numbers[i];
    }
    const media = acumulador / numbers.length;
    return media;
}

const mediaFinal = average(numbers);
console.log(mediaFinal);