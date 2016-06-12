
'use strict';

const master = require('../domains/master-of-params');
const expect = require('expect');

describe('master-of-params', () => {

    it('should extract param hostname from string', () => {
        expect(master.extractHostName('http://ya.ru:15672/queues'))
            .toEqual('ya.ru');
    });

    it('should change string param to object with ip and headers', () => {
        expect(master.injectResolutionResult(
            '213.180.193.3',
            'https://ya.ru:15672/queues?a=1#!/'
        ))
            .toEqual({
                url: 'https://213.180.193.3:15672/queues?a=1#!/',
                headers: {
                    host: 'ya.ru'
                }
            });
    });

    it('should extract param hostname from param.url', () => {
        expect(master.extractHostName({url: 'http://ya.ru:15672/queues'}))
            .toEqual('ya.ru');
    });

    it('should change param.url to ip set host header', () => {
        expect(master.injectResolutionResult(
            '213.180.193.3',
            { url: 'https://ya.ru:15672/queues?a=1#!/' }
        ))
            .toEqual({
                url: 'https://213.180.193.3:15672/queues?a=1#!/',
                headers: {
                    host: 'ya.ru'
                }
            });
    });

});
            
