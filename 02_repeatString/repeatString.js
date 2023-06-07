const repeatString = function (string, num) {
  if (num < 0) return 'ERROR';
  if (num === 0) return '';
  if (num === 1) return string;
  else return string + repeatString (string, num - 1);
};
repeatString ('hey', 3);

// Do not edit below this line
module.exports = repeatString;
