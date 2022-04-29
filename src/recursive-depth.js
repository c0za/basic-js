const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(a) {
    let res = 0;
    if (a) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
     res += 1 + calculateDepth(a[i]);
    } else res++;
  }
}
  return res;
  }  
}

const depthCalc = new DepthCalculator();
depthCalc.calculateDepth();

module.exports = {
  DepthCalculator
};
