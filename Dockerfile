FROM node:20-slim

RUN apt-get update && apt-get -y install ca-certificates

WORKDIR /app

COPY . .

RUN npm ci
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]