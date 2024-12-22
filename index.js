const { argv } = require("node:process")

// console.log("argv",Array.from(argv));
const args = Array.from(argv);
const date = args[args.indexOf("--date") + 1]

console.log(args);
console.log("--------------------");
console.log(date)
