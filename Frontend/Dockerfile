# Use the lightweight node image from official Docker Hub
FROM node:23-alpine AS build-stage
# set the working directory
WORKDIR /app
# Copy the package files to the working directory in the container
COPY package*.json .
# Install the project dependencies
RUN npm install
# Copy the rest of the project files to the container
COPY . .
# Build the Vue.js application to the production mode to dist folder
RUN npm run build
# Use the lightweight node image from the previous stage for production deployment
FROM node:23-alpine AS production-stage
# set the working directory
WORKDIR /app
# Install http-server
RUN npm install -g http-server
# Copy build files
COPY --from=build-stage /app/dist /app
# Install Nginx
RUN apk add --no-cache nginx
# Copy SSL certificates
COPY ssl/cert.pem /etc/nginx/certs/cert.pem
COPY ssl/key.pem /etc/nginx/certs/key.pem
# Create Nginx configuration file
RUN echo " \
    server { \
        listen 443 ssl; \
        server_name _; \
        ssl_certificate /etc/nginx/certs/cert.pem; \
        ssl_certificate_key /etc/nginx/certs/key.pem; \
        location / { \
            root /app; \
            index index.html index.htm; \
            try_files \$uri /index.html; \
        } \
    } \
    " > /etc/nginx/nginx.conf
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]