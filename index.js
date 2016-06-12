'use strict';

const requestWrapperFactory = require('./domains/request-wrapper-factory');
const dnsLookup = require('./domains/dns-lookup');

module.exports = requestWrapperFactory(dnsLookup);

