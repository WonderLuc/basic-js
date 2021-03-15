const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction){
    if(direction || direction === undefined){
      this.direction = true;
    }else{
      this.direction = false;
    }
  }

  validation(str,code){
    if(!str || !code){
      throw new Error();
    }
  }

  encrypt(str, code) {
    this.validation(str,code);
    str = str.toUpperCase();
    code = code.toUpperCase();

    // expand code to str length
    if(str.length != code.length){
      let length;
      do{
        code = code + code;
        length = code.length;
      }
      while(length < str.length);    
      code = [].slice.call(code,0,str.length).join('');
    }

    // chipher str 
    let cipher = "";
    for(let i =0, shift =0; i < str.length; i++){
      if(!str[i].match(/[A-Z]/)){
        cipher += str[i];
        shift++
        continue;
      }

      let letter = (str[i].charCodeAt(0)-64) + (code[i - shift].charCodeAt(0)-64) - 1;
      if(letter > 26){
        letter = letter-26;
      }

      cipher += String.fromCharCode(letter + 64);
    }

    if(!this.direction){
      cipher = cipher.split('').reverse().join('');
    }
    return cipher;
  }    

  decrypt(str, code) {
    this.validation(str,code);
    str = str.toUpperCase();
    code = code.toUpperCase();
    
    // expand code to str length
    if(str.length != code.length){
      let length;
      do{
        code = code + code;
        length = code.length;
      }
      while(length < str.length);    
      code = [].slice.call(code,0,str.length).join('');
    }
    
    let cipher = "";
    for(let i =0, shift =0; i < str.length; i++){
      if(!str[i].match(/[A-Z]/)){
        cipher += str[i];
        shift++
        continue;
      }

      let letter = (str[i].charCodeAt(0)-64) - (code[i - shift].charCodeAt(0)-64);
      if(letter < 0){
        letter = letter+26;
      }

      cipher += String.fromCharCode(letter + 65);
    }

    if(!this.direction){
      cipher = cipher.split('').reverse().join('');
    }
    return cipher;
    
  }
}

module.exports = VigenereCipheringMachine;
