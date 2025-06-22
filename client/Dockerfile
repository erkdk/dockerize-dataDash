# syntax=docker/dockerfile:1

FROM node:20.12.2-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Make sure the dev server listens on external IPs
ENV HOST=0.0.0.0

CMD ["npm", "start"]

