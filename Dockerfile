FROM node

WORKDIR /src

COPY package.json .

RUN npm i

COPY . .

EXPOSE 5174

CMD ["npm", "run", "dev"]