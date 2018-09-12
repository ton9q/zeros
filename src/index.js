module.exports = function getZerosCount(number) {
  var counter = 0;

  while (number) {
    number = Math.floor(number / 5);
    counter += number;
  }

  return counter;
};
