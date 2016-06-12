'use strict';

const master = require('./master-of-params');
const dns = require('dns');

module.exports = dnsLookup;

function dnsLookup(param) {
    return resolveHostName(master.extractHostName(param))
        .then(resolutionResult => {
            return master.injectResolutionResult(
                pickRandomIPV4(resolutionResult),
                param
            );
        });
}

function resolveHostName(hostName) {
    return new Promise((resolve, reject) => {
        dns.lookup(hostName, {all: true}, (err, addresses) => {
            if (err) {
                return reject(err);
            }

            resolve(addresses);
        });
    });
}

function pickRandomIPV4(arr) {
    if (!arr) {
        return;
    }

    arr = arr.filter(ip => ip.family === 4);

    return arr[Math.floor(arr.length * Math.random())].address;
}

