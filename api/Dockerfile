# base image
FROM node:alpine

WORKDIR /usr/app

# copy file FROM (relative to the current build context) your local TO CONTAINER path
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","run","start"]
