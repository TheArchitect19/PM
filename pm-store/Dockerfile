FROM node:20

WORKDIR /cache

COPY package.json .
COPY package-lock.json .
RUN npm install

WORKDIR /pm-store

ENV PATH /pm-store/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000