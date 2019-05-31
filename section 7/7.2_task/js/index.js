/*
Look at the following code:
*/

function Item(){
  this.id = Math.floor(Math.random() * 100);
}

function ElectronicItem(name) {
  this.name = name;
  Item.call(this);
}


const iphone = new ElectronicItem('iPhone');
const galaxyWatch = new ElectronicItem('Galaxy Watch');

console.log(iphone);
console.log(galaxyWatch);

/* 1) why the id is the same for both instances?
2) how to change ElectronicItem in order to produce objects with different ids? */