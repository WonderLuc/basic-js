const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if (!date.toLocaleDateString()){
    throw new Error();
  }
    
  let month = date.getMonth();
  if (month == 11 || month < 2){
    return 'winter';
  } 
  if (month < 5){
    return 'spring';
  }
  if (month < 8){
    return 'summer';
  }  
  return 'fall';
};
