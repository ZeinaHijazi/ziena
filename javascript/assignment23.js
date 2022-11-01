var array = [12,-15,-16,19,20,54,-100,0]
var positiveArr = [];
var negativeArr = [];

array.forEach(function(item) {
  if (item < 0) {
    negativeArr.push(item);
  } else {
    positiveArr.push(item)
  }
});

console.log(positiveArr) 
console.log(negativeArr)