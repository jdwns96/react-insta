FROM node:alpine as builder

ENV PORT 3000

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]