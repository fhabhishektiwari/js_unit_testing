// solution 1
// function palindrom(str) {
//   return str === str.split("").reverse().join("");
// }

// solution 2
function palindrom(str) {
  let reverseStr = "";
  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  return str === reverseStr;
}



//solution 4
// function palindrom(str) {
//   const charArr = str.split("");
//   let left = 0;
//   let right = charArr.length - 1;

//   while (left < right) {
//     if (charArr[left] !== charArr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

module.exports = palindrom;
