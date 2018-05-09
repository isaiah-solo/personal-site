FROM node:carbon

WORKDIR usr/src/frontend

RUN npm install -g serve
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
RUN npm run build --production
CMD ["serve", "-s", "build"]

