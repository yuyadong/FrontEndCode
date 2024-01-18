function increase(a) {
    // 函数对形参从新赋值不会影响
    // a = { n: 2 };
    // 改变属性有影响
    a.n++;
  }
  
  var a = { n: 1 };
  increase(a);
  increase(a);
  console.log(a);
  