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
console.log(isPalindrome(121));