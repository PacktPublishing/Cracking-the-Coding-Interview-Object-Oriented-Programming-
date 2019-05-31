const A = class {
  show() {
    console.log('A');
  }
}
const B = class {
  show() {
    console.log('B');
  }
}
const random = Math.random();

const MyRandomClass = class extends (random > 0.5 ? A : B) {};

new MyRandomClass().show();