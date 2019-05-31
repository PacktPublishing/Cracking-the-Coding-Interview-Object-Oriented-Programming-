class A {
  constructor(x) {
    this.x = x;
  }
  show() {
    console.log(this.x);
  }
}

class B extends A {
  constructor(x) {
    super(x);
    this.y = 12;
  }
  show() {
    console.log(this.y);
  }
}

const b = new B(10);
console.log(b);