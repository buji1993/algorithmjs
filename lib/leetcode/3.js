/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s == null) {
        return 0;
    }

    if (s.length < 2) {
        return s.length;
    }

    let maxLen = 0;
    let lastIndex = 0;
    let current = 1;

    let map = new Map();
    map.set(s.charAt(0), 0);

    for (let i = 1; i < s.length; i++) {
        if (map.get(s.charAt(i)) == undefined) {
            map.set(s.charAt(i), i);
            current++;
        } else {
            if (lastIndex <= map.get(s.charAt(i))) {
                current = i - map.get(s.charAt(i));
                lastIndex = map.get(s.charAt(i)) + 1;
            } else {
                current++;
            }

            map.delete(s.charAt(i));
            map.set(s.charAt(i), i);
        }

        if (current > maxLen) {
            maxLen = current;
        }
    }

    return maxLen;
};