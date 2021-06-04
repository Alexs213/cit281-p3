//const { count } = require("node:console");

function validDenomination(coin){
let num = [1, 5, 10, 25, 50, 100]
return false !== num.indexOf(coin) >= 0
}
console.log(validDenomination(25))

function valueFromCoinObject(obj){
let {denom = 0, count = 0} = obj
return denom * count;
//return (demon / 100) * count;
}

myCoinObj = {
    denom: 3,
    count: 5
};
//Examples Sam gave me during breakout rooms
//console.log("Is myCoinObj a vaild denomiation");
//console.log(validDenomination(myCoinObj.demon));

//if(!validDenomination(myCoinObj.demon)){
    //stop script here and give error message!
//}
console.log(valueFromCoinObject(myCoinObj));

function valueFromArray (arr){
    // No for or if only reduce
    //if (Array.reduce(arr[0])){
      //arr = arr [0];
    //}
    return arr.reduce((accumulator, currentValue)=>{
        return accumulator + valueFromCoinObject(currentValue)},0);
}

//Ask about this
//module.exports = {
    // coinCount, 
    // coins // ask about this move to the end if error
//};
function coinCount(...coinage){
return valueFromArray(coinage)

}

console.log("{}", coinCount({denom: 5, count: 3})); 
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2})); 
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}]; 
console.log("...[{}]", coinCount(...coins)); 
console.log("[{}]", coinCount(coins));  // Extra credit 
module.exports = {
    coinCount, 
    coins // ask about this move to the end if error
};