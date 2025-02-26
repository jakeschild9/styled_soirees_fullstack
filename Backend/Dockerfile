# Use the lightweight node image from official Docker Hub
FROM node:23-alpine AS build-stage
# set the working directory
WORKDIR /usr/src/app
# Copy the package files to the working directory in the container
COPY package*.json ./
# Install the project dependencies
RUN npm install
# Copy the rest of the project files to the container
COPY . .
# Expose the ports
EXPOSE 3000
# run the start command to serve
CMD [ "npm", "start" ]