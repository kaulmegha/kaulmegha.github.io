# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Use npx to run Angular CLI without installing it globally
RUN npx ng build --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/megha-kaul /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
