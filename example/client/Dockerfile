FROM 1602/alpine-node:4

COPY package.json /src/package.json

RUN cd /src && npm i --production

COPY . /src
WORKDIR /src

CMD ["node", "index.js"]

