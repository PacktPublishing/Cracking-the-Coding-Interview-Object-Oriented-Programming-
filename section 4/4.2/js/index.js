const SampleClass = (function() {
  let count = 0;
  return class {
    constructor() {
    }
    value() {
      return count;
    }
    increment() {
      count++;
    }
  }
})();

const sample = new SampleClass();
console.log(sample.value());