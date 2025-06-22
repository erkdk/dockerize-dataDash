# Use official Node.js 20 Alpine image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy all remaining app files
COPY . .

# Expose the port your app listens on
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]

