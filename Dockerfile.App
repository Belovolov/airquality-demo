FROM node:16-alpine
WORKDIR /app

COPY airquality-app/package.json /app
RUN npm install

COPY airquality-app/ /app/

ENTRYPOINT ["node", "server.js"]