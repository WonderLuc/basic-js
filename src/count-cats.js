const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix){
  let number = 0;
  matrix.forEach(arr=>{
    arr.forEach(el=>{
      if(el == "^^"){
        number++
      }
    });
  });
  return number;
};
