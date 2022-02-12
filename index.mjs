import { y } from "./foo.mjs";

// ES Module から CommonJS を呼び出す場合は Default import
import cjs from "./foo.cjs";

console.log(y);
console.log(cjs.y);
console.log(typeof module); // undefined
