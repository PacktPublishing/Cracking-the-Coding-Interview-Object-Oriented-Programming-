function mixin(Parent) {
  return class A extends Parent {
    constructor(x, ...args) {
      super(...args); // calling parent constructor
      this.x = x; // augmentation
    }};

}

class A {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }}


const Mixed = mixin(A); // returning augumented class
const mixed = new Mixed(1, 2, 3);
console.log(mixed);