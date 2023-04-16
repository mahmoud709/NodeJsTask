FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENV NAME World

CMD ["npm", "start"]