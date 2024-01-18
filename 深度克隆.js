function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {};

  if (obj && typeof obj === "object") {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }

  return objClone;
}

console.log(deepClone([1, { a: 1 }]));
