// Normal Approach
// function reversestring(str) {
//   return str.split("").reverse().join("");
// }

// solution 2
// function reversestring(str) {
//   let reverseString = "";
//   for (let char of str) {
//     reverseString = char + reverseString;
//     // console.log(reverseString);
//   }
//   return reverseString;
// }

// function reversestring(str) {
//   return str.split("").reduce((reversed, char) => char + reversed, "");
// }

// solution 4
function reversestring(str) {
  const charArr = str.split("");
  let left = 0;
  let right = charArr.length - 1;

  while (left < right) {
    // const temp = charArr[left];
    // charArr[left] = charArr[right];
    // charArr[right] = temp;

    [charArr[left], charArr[right]] = [charArr[right], charArr[left]];

    left++;
    right--;
  }
  return charArr.join("");
}

module.exports = reversestring;
