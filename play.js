// brings in code from <file>
// remember to remove connect() so you can put it here and run it instead
const connect = require('./client');
const setupInput = require('./input');

// now you have connected;
let conn = connect();

// now you can add input (type into terminal);
setupInput(conn);

