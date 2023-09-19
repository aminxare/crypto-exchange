# Use the official Node.js image as the base image
FROM node
# Set the working directory in the container
WORKDIR /app
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
# Install the client dependencies
RUN npm install
# Copy the rest of the client source code to the container
COPY . .
# Expose the port that your React development server listens on (e.g., 3000)
EXPOSE 3000
# Start the React application
CMD ["npm", "start"]
