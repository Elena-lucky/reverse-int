module.exports = function reverse (n) {
    let num = Math.abs(n).toString();
    let result = '';
    let i = 0;
    while (i < num.length) {
      result = `${num[i]}${result}`;
      i = i + 1;
    }
    return result;
  };
  
 