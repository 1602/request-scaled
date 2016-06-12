'use strict';

const http = require('http');

http.createServer((req, res) => {
    console.log('hello');
    res.end('hello')
}).listen(3000, () => {
    console.log('server started');
});

process.on('SIGTERM', () => process.exit());
process.on('SIGINT', () => process.exit());

