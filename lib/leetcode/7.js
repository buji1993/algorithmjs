/*
 * @Author: buji 
 * @Date: 2017-08-08 22:36:42 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-09 21:56:09
 */

/**
 * @param {number} x
 * @return {number}
 */
module.exports = reverse = function (x) {
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