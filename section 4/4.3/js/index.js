class SampleClass {
  static method2(){
    console.log(this);
  };
  constructor(){};
  method(){};
}

class SampleClass2 extends SampleClass {
  static method2(){
    console.log('this');
  };
}

const obj = new SampleClass();
SampleClass.prop = 12;
console.log(SampleClass2.method2())