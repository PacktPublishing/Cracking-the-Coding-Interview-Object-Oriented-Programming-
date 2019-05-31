class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new TypeError("Abstract class cannot be instantiated");
    }
    if (!this.show) {
      throw new TypeError(
        "Method show has to be implemented by a successor class"
      );      
    }
  }
}

class AnotherClass extends Abstract {
  show() {}
}