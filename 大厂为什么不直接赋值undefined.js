// undefined是window对象的一个只读属性

var a = undefined;
console.log(a);

var b = void 0;
console.log(b);

function fn() {
  var undefined = 1;
  console.log(undefined);
}

fn();
