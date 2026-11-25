
FROM node:24-alpine

WORKDIR /app

# Copy dependency manifests first
COPY package.json yarn.lock ./

# Install production dependencies only
RUN yarn install --frozen-lockfile --production=true

# Copy application source code
COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]
