const connect = require('./client');


// this functions handles any user input (what you type in)
// your input is (key) in this case
let connection;

const handleUserInput = function (key) {

  let w = "Move: up"
  let a = "Move: left"
  let s = "Move: down"
  let d = "Move: right"
  // exits and returns to your terminal when "ctrl+c"
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write(w);
  }
  if (key === 'a') {
    connection.write(a);
  }
  if (key === 's') {
    connection.write(s);
  }
  if (key === 'd') {
    connection.write(d);
  }
  connection.write("Say: hello");
};

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;