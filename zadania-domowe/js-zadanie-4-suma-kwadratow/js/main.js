    'use strict';

function arrayMultiplyAndSum(priorArray) {

    var resultMultiply = [];

    for (var i = 0; i < priorArray.length; i++) {
        var arrayMultiplied = Math.pow(priorArray[i], 2);
        resultMultiply.push(arrayMultiplied);
    }


    var arraySum = 0;

    resultMultiply.forEach(function (arrayElement) {
        arraySum += arrayElement;
    });

    return arraySum;
};

console.log(arrayMultiplyAndSum([0, 1, 2, 3, 4, 5]));