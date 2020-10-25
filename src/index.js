


module.exports = function check(str, bracketsConfig) {
  let bracketsType = [],
  step = str.length / 2;

  bracketsConfig.forEach(elem => bracketsType.push(elem[0] + elem[1]));

  for (let i = 0; i < step; i++) {
    bracketsType.forEach(elem => str = str.replace(elem, ''));
    if (str.length === 0) return true;
  };

  return false
}

