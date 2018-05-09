FROM node:carbon

WORKDIR usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081
CMD [ "npm", "start" ]
