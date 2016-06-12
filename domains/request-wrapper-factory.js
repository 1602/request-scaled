'use strict';

module.exports = requestWrapperFactory;

/**
 * Request wrapper factory should return wrapper for request which will return
 * function which behaves like given request just performing given hook before
 * actual request.
 *
 * @param hook {Function} - async (promise) hook to perform before request.
 * @returns {Function} - wrapped request.
 */
function requestWrapperFactory(hook) {

    return function requestWrapper(requestToWrap) {

        const request = function request(param) {
            return wrap(requestToWrap, null, param);
        };

        ['post', 'get', 'put', 'delete']
            .forEach(methodName => {
                request[methodName] = param => wrap(
                    requestToWrap[methodName],
                    requestToWrap,
                    param
                );
            });

        return request;
        
        function wrap(fn, context, param) {
            return hook(param)
                .then(upgradedParam => new Promise((resolve, reject) => {
                    fn.call(context, upgradedParam, (err, res) => {
                        if (err) {
                            reject(err);
                            return;
                        }

                        resolve(res);
                    });
                }));
        }

    };

}

