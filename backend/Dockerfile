# Creates image for backend
FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3333
EXPOSE 80
CMD [ "node", "src/index.js" ]