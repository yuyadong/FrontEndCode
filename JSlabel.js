outerloop:for (var i = 0; i < 10; i++) {
  console.log("外层循环");
  for (var j = 0; j < 10; i++) {
    console.log("内层循环");
    break outerloop;
  }
}
