/*
 * @Author: buji 
 * @Date: 2017-08-08 23:29:34 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-08 23:52:33
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let results = new Array();
    for (let i = 0; i < numRows; i++) {
        results.push("");
    }

    for (let i = 0; i < s.length; i++) {
        const item = s.charAt(i);
        const loop = 2 * numRows - 2;

        const remain = i % loop;

        if (remain < numRows) {
            results[remain] += item;
        } else {
            results[loop - remain] += item;
        }
    }

    let result = "";
    for (let i = 0; i < numRows; i++) {
        result += results[i];
    }

    return result;
};

console.log('result', convert('PAYPALISHIRING', 3));