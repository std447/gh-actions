const { argv } = require("node:process")

const {SUPER_SECRET: secret = "no secret"} = process.env;
console.log("secret ",secret);

const output = (input) => `This is your ${input}`;

console.log(output(secret));

// console.log("argv",Array.from(argv));
const args = Array.from(argv);
const date = args[args.indexOf("--date") + 1]

console.log(args);
console.log("--------------------");
console.log(date)
