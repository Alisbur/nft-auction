FROM node:20-alpine
RUN mkdir -p /app
RUN apk add --no-cache libc6-compat

ARG ENVIRONMENT
WORKDIR /app
COPY *.json /app/
RUN npm ci
COPY ./ /app/
ENV NODE_ENV production

RUN echo "NEXT_PUBLIC_API_URL=https://api.coingecko.com/api/v3/" >> .env.local;
RUN npm run build

CMD [ "npm", "start" ]
EXPOSE 3000
