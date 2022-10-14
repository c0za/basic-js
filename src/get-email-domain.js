const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let str = email.split("").reverse().join("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '@') {
      return (str.slice(0, i).split("").reverse().join(""));
    }
  }
}

module.exports = {
  getEmailDomain
};

