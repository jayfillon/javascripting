const urlEncode = function (text) {
  let replaced = "";
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      replaced = text.split(" ").join("%20");
    }
  }
  return replaced;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
