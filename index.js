'use strict';

const requestWrapper = require('./domains/request-wrapper');
const dnsLookup = require('./domains/dns-lookup');

module.exports = requestWrapper(dnsLookup);
