/*
 * @Author: buji 
 * @Date: 2017-08-15 21:34:53 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-15 22:29:31
 */

/**
 * @param {number[]} height
 * @return {number}
 */
module.exports = maxArea = function (height) {
    let min = 0;
    let max = height.length - 1

    let contains = 0;

    while (min < max) {
        contains = Math.max(contains, Math.min(height[min], height[max]) * (max - min));
        height[min] < height[max] ? min++ : max--;
    }


    return contains;
};