FROM node:26-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

USER node

CMD ["node", "redirect.js"]
