const palindromes = function (string) {
  var re = /[^A-Za-z0-9]/g;
  string = string.toLowerCase ().replace (re, '');
  var len = string.length;
  for (var i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
palindromes ('');
// Do not edit below this line
module.exports = palindromes;
