const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let count = 1;
  if (str.length > 0) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        if (count === 1) arr.push(str[i]);
        else {
          arr.push(count, str[i]);
          count = 1;
        }
      }
    }
    if (count === 1) arr.push(str[str.length - 1]);
    else arr.push(count, str[str.length - 1]);
  }
  return arr.join('');
}


module.exports = {
  encodeLine
};
