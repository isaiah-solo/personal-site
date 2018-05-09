FROM node:carbon

WORKDIR /usr/src/frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --production

FROM nginx
RUN pwd
RUN cp -r /usr/src/frontend/build/ /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

