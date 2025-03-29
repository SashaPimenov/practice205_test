FROM --platform=linux/amd64 node:20-alpine as build

WORKDIR /src
COPY ./src .

CMD ["node", "index.js"]