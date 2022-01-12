module.exports = function reverse(n) {
   if (n < 0) {
      let b = n.toString().split('').reverse()
      b.pop();
      return +b.join('');
   } else {
      let b = n.toString().split('').reverse().join('');
      return +b;
   }
}
