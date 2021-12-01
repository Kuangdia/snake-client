const net = require("net");
const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin
// });

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.34",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // On connect
  conn.on('connect', () => {
    // check that we're connected to server
    console.log("You are connected");
    // writes to server
    conn.write("Name: XXH")
  })

  // rl.on('line', (input) => {
  //   conn.write(`${input}\n`)
  // })

  // reads data sent by server
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};


console.log("Connecting ...");
connect();

module.exports = connect;