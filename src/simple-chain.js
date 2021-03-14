const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links:[],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if( value === undefined){
      this.links.push('( )');
      return this;
    }
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if(!this.links[position-1]&& this.links[position-1] !== false){
      this.links = [];
      throw new Error;
    }
    this.links = this.links.slice(0,position-1).concat(this.links.slice(position));
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
   let res =  this.links.map(el=>{
     return `( ${el} )`;
   }).join('~~');
   this.links = [];
   return res;
  }
};

module.exports = chainMaker;
