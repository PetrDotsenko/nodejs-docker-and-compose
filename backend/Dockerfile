FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN if npm run | grep -q "build"; then npm run build; fi
FROM node:16-alpine AS runner
WORKDIR /app
RUN npm i -g pm2@5
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src
COPY --from=builder /app/ecosystem.config.js ./
ENV PORT=4000
EXPOSE 4000
CMD ["sh", "-lc", "if [ -f ecosystem.config.js ]; then pm2-runtime ecosystem.config.js --env production; else npm run start:prod || npm start || node dist/main.js; fi"]
