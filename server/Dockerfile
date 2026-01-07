FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy server source code
COPY index.js ./
COPY data ./data

# Expose port
EXPOSE 5001

# Set environment variable for port
ENV PORT=5001

CMD ["node", "index.js"]
