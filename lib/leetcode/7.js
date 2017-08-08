/*
 * @Author: buji 
 * @Date: 2017-08-08 22:36:42 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-08 23:06:08
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const sign = Math.sign(x);
    const maxValue = Math.pow(2, 31);

    x = Math.abs(x);

    let result = 0;
    while (x != 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    if (result > maxValue) {
        return 0;
    }

    result *= sign;

    return result;
};

console.log('result', reverse(-123));