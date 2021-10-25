// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.



// Example 1:

// Input: num = 3
// Output: "III"
// Example 2:

// Input: num = 4
// Output: "IV"
// Example 3:

// Input: num = 9
// Output: "IX"
// Example 4:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= num <= 3999
// let tester = function test(params) {
//     //test if the number is greater than 1000
//     if (num > 1000) {
//         //you'll get a remainder to tell me how many M's i need
//         if (num / 1000 > 1) {
//             floatNum = num / 1000;
//             //if a float convert it to integer to get a definite value (parameter is 3999 so safe for now)
//             myMCount = parseInt(floatNum);
//             AddmyM = 'M';
//             added = "M";
//             //now we need to concarinate the M depending on myMCount
//             if (myMCount = 2) {
//                 AddmyM = AddmyM.concat(added);
//                 var pusher = RomanArray.push(AddmyM);
//             }
//             if (myMCount = 3) {
//                 AddmyM = AddmyM.concat(added);
//             }
//             newnum = num % 1000;
//         }
//         // else {

//         //     //    newnum = num-1000;
//         // }
//     }
//     //  else if (newnum > 900 && newnum < 1000) {

//     // }
//     // }
//     // switch (num) {
/**
 * @param {number} num
 * @return {string}
 */

//     RomanArray = [];
//values that can hold index three
const indexthree = new Map();
indexthree.set('I', "1");
indexthree.set('II', "2");
indexthree.set('III', "3");
indexthree.set('IV', "4");
indexthree.set('V', "5");
indexthree.set('VI', "6");
indexthree.set('VII', "7");
indexthree.set('VIII', "8");
indexthree.set('IX', "9");
//values that can hold index TWO
const indextwo = new Map();
indextwo.set('X', "1");
indextwo.set('XX', "2");
indextwo.set('XXX', "3");
indextwo.set('XL', "4");
indextwo.set('L', "5");
indextwo.set('LX', "6");
indextwo.set('LXX', "7");
indextwo.set('LXXX', "8");
indextwo.set('LC', "9");
//values that can hold index ONE

const indexone = new Map();
indexone.set('C', "1");
indexone.set('CC', "2");
indexone.set('CCC', "3");
indexone.set('CD', "4");
indexone.set('D', "5");
indexone.set('DC', "6");
indexone.set('DCC', "7");
indexone.set('DCCC', "8");
indexone.set('CM', "9");
//values that can hold index ZERO

const indexzero = new Map();
indexzero.set('M', "1");
indexzero.set('MM', "2");
indexzero.set('MMM', "3");
RomanArray = [];
var intToRoman = function(num) {
    numintoString = num.toString();

    len = numintoString.length;

    switch (len) {
        case 0:
            concatNum = "0000";
            break;
        case 1:
            something = "000"
            concatNum = something.concat(numintoString);
            break;
        case 2:
            something = "00"
            concatNum = something.concat(numintoString);
            break;
        case 3:
            something = "0"
            concatNum = something.concat(numintoString);
            break;
            // case 4:
            //     // something = "0"
            //     concatNum = something.concat(numintoString);
            //     break;
        default:
            concatNum = numintoString;
            break;
    }
    numintoArray = concatNum.split("");
    //what if user enters a lager number than 3999
    //indexZero
    let indexZeroKeys = [...indexzero.entries()]
        .filter(({ 1: v }) => v === numintoArray[0])
        .map(([k]) => k);
    RomanArray.push(indexZeroKeys);
    //indexOne
    let indexOneKeys = [...indexone.entries()]
        .filter(({ 1: v }) => v === numintoArray[1])
        .map(([k]) => k);
    RomanArray.push(indexOneKeys);
    //indexTwo
    let indexTwoKeys = [...indextwo.entries()]
        .filter(({ 1: v }) => v === numintoArray[2])
        .map(([k]) => k);
    RomanArray.push(indexTwoKeys);
    //indexThree
    let indexThreeKeys = [...indexthree.entries()]
        .filter(({ 1: v }) => v === numintoArray[3])
        .map(([k]) => k);
    RomanArray.push(indexThreeKeys);


    var JoinedString = RomanArray.join("");


    return JoinedString;
};
console.log(intToRoman(10));