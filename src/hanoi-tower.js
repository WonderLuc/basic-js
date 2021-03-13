const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let response = {};
  response.turns = 2**disksNumber - 1;
  response.seconds = Math.floor((3600*response.turns)/turnsSpeed);
  return response;
};
