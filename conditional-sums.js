const conditionalSum = function (values, condition) {
  let evenSum = 0;
  let oddSum = 0;

  //Test to see if array is populated with values
  if (values === undefined || values.length == 0) {
    return 0;
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenSum += values[i];
    }
    if (values[i] % 2 === 1) {
      oddSum += values[i];
    }
  }

  if (condition === "even") {
    return evenSum;
  } else if (condition === "odd") {
    return oddSum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
