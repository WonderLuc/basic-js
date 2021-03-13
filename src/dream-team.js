const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let filteredArr = [];
  for(let i =0; i<members.length; i++){
    if(typeof members[i] !== 'string'){
      continue;
    }
    filteredArr.push(members[i].trim().toUpperCase());
  }
  filteredArr.sort();
  let result ="";
  filteredArr.forEach(name=>{
    result += name[0];
  });
  return result.toUpperCase();
};
