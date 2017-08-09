/*
 * @Author: buji 
 * @Date: 2017-08-08 23:59:53 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-09 21:53:34
 */

/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const origin = x;
    let reverse = 0;

    while (x != 0) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return origin === reverse;
};