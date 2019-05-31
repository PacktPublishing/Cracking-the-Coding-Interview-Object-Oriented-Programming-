const a = {x: 1};
const b = {y: 2};
const c = {z: 3};

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);