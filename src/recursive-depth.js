const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let i= 0; i<arr.length;i++){
      let innerDepth = 1;
      if(Array.isArray(arr[i])){
        innerDepth += this.calculateDepth(arr[i]);
      }
      if(innerDepth > depth){
        depth = innerDepth;
      }
    }
    return depth;
  }
};