const { argv } = require("node:process")

const {super_secret: secret = "no secret"} = process.env;
console.log("secret ",secret);

// console.log("argv",Array.from(argv));
const args = Array.from(argv);
const date = args[args.indexOf("--date") + 1]

console.log(args);
console.log("--------------------");
console.log(date)
