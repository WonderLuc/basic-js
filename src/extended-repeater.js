const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = ''+str;
  let arr = [];
  let repeats = options.repeatTimes? options.repeatTimes: 1;
  let addition ='';
  if(options.addition !== undefined){
    addition += repeater(options.addition,{
      repeatTimes: options.additionRepeatTimes, 
      separator:options.additionSeparator?options.additionSeparator:'|'});
  }
  for(let i=0; i< repeats;i++){
    arr.push(str + addition)    
  }
  return arr.join(options.separator?options.separator:'+');
};
  