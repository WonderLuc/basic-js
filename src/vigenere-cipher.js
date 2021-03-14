const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction){
    if(direction || direction === undefined){
      this.direction = true;
    }else{
      this.direction = false;
    }
  }
  encrypt(str, code) {
    if(!str || !code){
      throw new Error();
    }
    str = str.toUpperCase();
    if(str.length != code.length){
      let length = code.length;
      do{
        code +=code;
      }
      while(length < str.length);
      code = [].slice.call(str,0,str.length+1).join('');
    }
  }    
  decrypt(str, code) {
  
  }
}

module.exports = VigenereCipheringMachine;
