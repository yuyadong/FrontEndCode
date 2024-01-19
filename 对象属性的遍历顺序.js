let obj = {
  p2: "aaa",
  2: "aaa",
  1: "aaa",
  p1: "aaa",
};

for (var key in obj) {
  // 1, 2, p2, p1
  // 数字进行升序排列为了更好的计算达到效率
  console.log(key);
}
