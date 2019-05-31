/* Create a constructor function User that will produce objects with properties: name, surname, account and method merge. 
Name, surname, account are fields.
Merge is a method fulfilling criterias:
- should expect to get another User instance as an argument
- should return a new object with the same structure (with all 4 properties)
- properties name, surname and account of the returned object should be concatenation/sum of names, surnames, accounts from provided object and object from which a method has been called */
 
function User(name, surname, account) {
  this.name = name;
  this.surname = surname;
  this.account = account;
}

User.prototype.merge = function(user) {
    return new User(`${this.name} ${user.name}`, `${this.surname} ${user.surname}`, this.account + user.account);
}

// Example of usage: 
const u1 = new User('adam', 'kovalsky', 1023);
const u2 = new User('john', 'smith', 3421);
const merged = u1.merge(u2);
console.log(merged);
/*
The last variable called 'merged' is an object: {
  name: "adam john",
  surname: "kovalsky smith",
  account: 4444,
  merge: function
}
*/