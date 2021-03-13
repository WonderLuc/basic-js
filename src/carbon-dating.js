const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || isNaN(sampleActivity) || (+sampleActivity) > 15 || (+sampleActivity) <= 0){
    return false;
  }
  let k = LN_2/HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/k);
};
