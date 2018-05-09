FROM node:carbon

WORKDIR usr/src/frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --production

FROM nginx:latest
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

