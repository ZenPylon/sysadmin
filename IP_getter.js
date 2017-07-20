'use strict';

const fs = require('fs');
const moment = require('moment');

let logFileName = 'whatever.com';
let maliciousFileName = 'ibuvrdfp.php';

let logArray = fs.readFileSync(logFileName).toString().split("\n");
let maliciousLog = logArray
  .filter(line => line.indexOf(maliciousFileName) !== -1)
  .map(line => line.substr(0, line.indexOf(' -')))
  .filter((item, index, self) => index === self.indexOf(item))
  .sort();

let ipString = ipArray.join('\n');

fs.writeFileSync(logFileName+ '_ipAddresses.txt', ipString);
process.exit();
