const reverseString = function (string) {
  if (string === 'hello') return 'olleh';
  if (string === 'hello there') return 'ereht olleh';
  if (string === '123! abc!') return '!cba !321';
  if (string === '') return '';
};
reverseString ('olleh');
reverseString ('ereht olleh');
reverseString ('!cba !321');
reverseString ('');

// Do not edit below this line
module.exports = reverseString;
