FROM node:10.15.3-alpine

RUN apk add python make
WORKDIR /code
COPY package.json package-lock.json ./
RUN npm install --only=production
COPY . ./

CMD ["node", "."]