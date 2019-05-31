function Product(name, brand) {
  if(this.constructor === Product) throw new TypeError('Product constructor cannot be invoked directly')
  this.name = name;
  this.brand = brand;
}
Product.prototype.print = function() {
  console.log(this.name, this.brand);
}
Product.prototype.getCount = function() {
  console.log(this.count);
}
Product.prototype.printCode = function() {
  console.log(`${this.typeCode}#${this.brand}#${this.name}`);
}
function ElectronicProduct(name, brand) {
  Product.call(this, name, brand);
  ElectronicProduct.prototype.count++;
}
ElectronicProduct.prototype.count = 0;
ElectronicProduct.prototype.typeCode = 'Electronic';
ElectronicProduct.prototype.__proto__ = Product.prototype; 

function GroceryProduct(name, brand) {
  Product.call(this, name, brand);
  GroceryProduct.prototype.count++;  
}
GroceryProduct.prototype.count = 0;
GroceryProduct.prototype.typeCode = 'Grocery';
GroceryProduct.prototype.__proto__ = Product.prototype; 

const galaxyWatch = new ElectronicProduct('galaxy watch', 'samsung');
const iPhone = new ElectronicProduct('iPhone', 'apple');
galaxyWatch.print();
galaxyWatch.getCount();
galaxyWatch.printCode();