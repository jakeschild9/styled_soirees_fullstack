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
FROM nginx:alpine AS production-stage
# Copy the built files from the build stage into the NGINX html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Expose the ports
EXPOSE 80
EXPOSE 443
# Start NGINX to serve the app
CMD ["nginx", "-g", "daemon off;"]
