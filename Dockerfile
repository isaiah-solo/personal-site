FROM node:carbon

WORKDIR usr/src/frontend

RUN npm install -g serve
CMD serve -s build

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
RUN npm run build --production
