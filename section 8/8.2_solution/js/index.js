class Product {
  constructor(name, brand) {
    if(new.target === Product) throw new TypeError('Product class cannot be used directly')
    this.name = name;
    this.brand = brand;
    new.target.count = new.target.count ? new.target.count + 1 : 1;
  }
  print() {
    console.log(this.name, this.brand);
  }
  getCount() {
   console.log(this.constructor.count);
  }
  printCode() {
    console.log(`${this.constructor.getTypeCode()}#${this.brand}#${this.name}`);
  }
}

class ElectronicProduct extends Product {
  static getTypeCode() {
    return 'Electronic';
  }
}


class GroceryProduct extends Product {
  static getTypeCode() {
    return 'Grocery';
  }
}

const galaxyWatch = new ElectronicProduct('galaxy watch', 'samsung');
const iPhone = new ElectronicProduct('iPhone', 'apple');
galaxyWatch.print();
galaxyWatch.getCount();
galaxyWatch.printCode();