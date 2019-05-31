function Constructor1(x, y) {
  this.x = x;
  this.y = y;
}

Constructor1.prototype = {
  sum() {
    let sum = 0;
    for(const prop in this) {
      sum += this[prop];
    }
    return sum;
  }
}

function Constructor2(a, b) {
  Constructor1.call(this, a, b)
  this.a = a;
  this.b = b;
}

Constructor2.prototype = {
  show() {
    console.log(this);
  }
}

Constructor2.prototype.__proto__ = Constructor1.prototype;
  
const a = new Constructor2(10, 12);
console.log(a.sum())