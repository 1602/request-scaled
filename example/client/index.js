'use strict';

const requestScaled = require('request-scaled')(require('request'));

setInterval(() => {
    requestScaled.get('http://server:3000')
        .then(res => {
            console.log(res.body);
        })
        .catch(e => console.error('err', e));
}, 1000);

process.on('SIGTERM', () => process.exit());
process.on('SIGINT', () => process.exit());

