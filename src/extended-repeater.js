const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition || '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let resultStr = String(str);

  let innerString = addition + additionSeparator;
  innerString = innerString.repeat(additionRepeatTimes);
  innerString = innerString.slice(0, -additionSeparator.length);

  resultStr += innerString + separator;
  resultStr = resultStr.repeat(repeatTimes);
  console.log(resultStr);
  resultStr = resultStr.slice(0, -separator.length);


  return resultStr;







}

module.exports = {
  repeater
};
