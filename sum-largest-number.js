const sumLargestNumbers = function (data) {
  let largest = 0;
  let secondLg = 0;
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largest) {
      secondLg = largest; //Old biggest num is now the secondBig
      largest = data[i]; //found the biggest num

      //It's not the biggest, possible second biggest num
    } else if (data[i] > secondLg) {
      secondLg = data[i];
    }
  }
  sum = largest + secondLg;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
