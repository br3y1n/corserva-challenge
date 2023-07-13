FROM node:20

WORKDIR /usr/src/app

RUN npm i nodemon ts-node -g

COPY package.json ./

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]