// this functions handles any user input (what you type in)
// your input is (key) in this case
const handleUserInput = function (key) {
  // exits and returns to your terminal when "ctrl+c"
  if (key === '\u0003') {
    process.exit();
  }
  console.log("Data: received:", key);
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;