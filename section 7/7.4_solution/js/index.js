/* Create a Box class that:
expects to get one argument in constructor
has method show() that when called calls console.log on the passed argument to the constructor method
has method perform() that:
expects one argument
returns undefined if the provided argument is not a function
when called with function this functions is called with argument passed to constructor method
*/

class Box {
  constructor(arg) {
    this.arg = arg;
  }
  show() {
    console.log(this.arg);
  }
  perform(f) {
    if(typeof f === 'function') f(this.arg);
  }
}