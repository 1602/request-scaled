'use strict';

const url = require('url');

module.exports = {
    injectResolutionResult,
    extractHostName
};

function injectResolutionResult(ip, param) {
    const parsedUrl = getParsedUrl(param);
    const host = parsedUrl.hostname;
    const newUrl = url.format(Object.assign(parsedUrl, {
        hostname: ip,
        host: null,
        href: null
    }));

    const update = {};

    if (param.uri) {
        update.uri = newUrl;
    } else {
        update.url = newUrl;
    }

    const headers = Object.assign({}, param.headers, { host });
    update.headers = headers;

    return 'object' === typeof param ?
        Object.assign({}, param, update) :
        update;
}

function getParsedUrl(param) {
    if ('string' === typeof param) {
        return url.parse(param);
    } else if ('object' === typeof param) {
        return url.parse(param.url || param.uri);
    }
}

function extractHostName(param) {
    return getParsedUrl(param).hostname;
}

