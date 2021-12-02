const net = require("net");

console.log("Connecting ...");

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
    conn.write("Name: XXH");
  })

  /* 
  * you can write as many connect callbacks but this runs too fast for tcp to show
  conn.on('connect', () => {
    // check that we're connected to server
    console.log("You are connected");
    // writes to server
    conn.write("Name: XXH");
  })
  */

  // reads data sent by server
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = connect;