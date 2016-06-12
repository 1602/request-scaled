'use strict';

const request = require('request');
const requestScaled = require('../')(request);

describe('request-scaled', () => {

    it.skip('should work', () => requestScaled.get('http://dapi.ub.io/status'));

});

