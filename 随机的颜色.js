function randomColor() {
  return "#" + Math.random().toString(16).substring(2, 8);
}

console.log(randomColor());
