const obj = {
  x: 12
}

const a = (function() {
  const a = 12;
  return {
    x: 12,
    m() {
      return a;
    }
  }
})();
console.log(a)