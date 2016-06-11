# Request scaled

The `request-scaled` is a wrapper around `request` to work with scaled services, for example multiple instances of docker container.

## Motivation

Normally if you want to scale you should use load balancer such as nginx or haproxy,
autogenerate config file for your balancer based of infrastructure changes. In other words amount of accidental complexity it requires to add is big enough to not even think of scaling at quick prototyping stage.

But what if we could avoid this accidental complexity and only do what is essential for scaling of http server: sending requests to different instances of service.

All we have to do then is to perform dns lookup, pick random ip and use it instead of host, this is exactly and the only thing this library does.

## Usage

```
const request = require('request');
const requestScaled = require('request-scaled')(request);

// use requestScaled as you would use request
requestScaled.get('http://api:3000/perform/heavy/query')
    .then(res => {
    	// res is http response
    })
    .catch(err => {
    	// handle error
    	console.error('Error from api:3000/perform/heavy/query', err);
    });
```

For those who still use callbacks: sorry, you have to fork, implement callback hell
yourself, I'm not doing this for you.

## Control over DNS lookup

no control yet, maybe coming soon

## LICENSE

[MIT](./LICENSE)
