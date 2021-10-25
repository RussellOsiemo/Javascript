//  function random(number) {
//      return Math.floor(Math.random() * (number + 1));
//  }
//  let fowardValue = '';
//  let fowardValueString = '';

//  var isPalindrome = function(x) {
//      fowardValue = random(500);

//      fowardValueString = fowardValue.toString();
//      reverseValue = fowardValueString.split("").reverse().join("");
//      console.log(fowardValueString);
//      if (fowardValueString === reverseValue) {
//          return true;
//      } else {
//          return false;
//      }
//  };
/*<h1>Palindrome integer</h1>
    <p>Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not. Example 1: Input: x = 121 Output: true Example 2: Input: x = -121 Output:
        false Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome. Example 3: Input: x = 10 Output: false Explanation: Reads 01 from right to left. Therefore it is not a palindrome. Example
        4: Input: x = -101 Output: false
    </p>*/
//  console.log(isPalindrome(1));
/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(word) {
    // fowardValue = 121;

    fowardValueString = word.toString();
    reverseValue = fowardValueString.split("").reverse().join("");
    //  console.log(fowardValueString);
    if (fowardValueString === reverseValue) {
        return true;
    }
    return false;

};
console.log(isPalindrome(3));