FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:16 AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./

RUN npm install --production

EXPOSE 3000

CMD ["yarn", "dev"]