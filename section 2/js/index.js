const a = true // boolean
const b = null // null
const c = undefined // undefined
const d = 4 // number
const e = 'hello' // string
const f = Symbol('symbol description') // symbol

const g = {
  key: 'value'
}

// string String
// boolean Boolean
// number Number
// symbol Symbol

class A {
  constructor() {
    this.x = 12;
  }
}
class B extends A {
  m(){}
}
const instance = new B();
instance.y = 12;
delete instance.x;
console.log(instance instanceof A);
instance.m && instance.m();