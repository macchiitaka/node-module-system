const { y } = require("./foo.cjs");

// CommonJS から ES Module を呼び出す場合は import() を利用
import("./foo.mjs").then(({ y }) => {
  console.log(y);
});

console.log(y);
console.log(typeof module); // object
