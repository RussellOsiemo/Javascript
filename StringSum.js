/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var num1Int = parseInt(num1);
    var num2Int = parseInt(num2);
    var sum = num1Int + num2Int;
    var sumString = sum.toString();
    return sumString;

};
console.log(addStrings("1345278243172157851237875711", "120440705757766784783"));