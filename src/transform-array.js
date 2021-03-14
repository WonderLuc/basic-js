const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error();
  }
  if(arr.length === 0){
    return [];
  }
  let transformedArr = [];
  let isSkipNext = false;

  for(let i =0; i < arr.length; i++){
    switch(arr[i]){
      case "--discard-next":
        if(arr[i+1] === undefined){
          break;
        }
        isSkipNext = true;
        break;
      case "--discard-prev":
        if(arr[i-1] === undefined){
          break;
        }
        if(isSkipNext){
          isSkipNext = false;
          break;
        }
        transformedArr.pop();
        break;
      case "--double-next":
        if(arr[i+1] === undefined){
          break;
        }
        transformedArr.push(arr[i+1]);
        break;
      case "--double-prev":
        if(arr[i-1] === undefined){
          break;
        }
        if(isSkipNext){
          isSkipNext = false;
          break;
        }
        transformedArr.push(arr[i-1]);
        break;
      default:
        if(isSkipNext){
          if(arr[i+1] === '--discard-prev' || arr[i+1] === '--double-prev'){
            break;
          }
          isSkipNext = false;
          break;
        }
        transformedArr.push(arr[i]);
        
    }
  }
  return transformedArr;
};
