var addition = require('./Addition.js');
var substraction = require('./Substraction.js');
var multiplication = require('./Multiplication.js');
var division = require('./Division.js');

var exports = module.exports={};
exports.ArtithmeticFunctions = function(a,b){
var answer = console.log(addition.AddNumbers(a,b));
answer += console.log(substraction.SubstractNumbers(a,b));
answer += console.log(multiplication.MultiplyNumbers(a,b));
answer += console.log(division.DivideNumbers(a,b));
return answer;
}