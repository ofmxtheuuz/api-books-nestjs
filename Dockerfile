FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DB_HOST=db
ENV DB_PORT=3306
ENV DB_USER=mxtz
ENV DB_PASSWORD=mxtz2023
ENV DB_NAME=api_nest

CMD ["npm", "run", "start:dev"]
