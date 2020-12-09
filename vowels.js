const numberOfVowels = function (data) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    let compare = data[i];

    for (let j = 0; j < vowels.length; j++) {
      if (compare == vowels[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
