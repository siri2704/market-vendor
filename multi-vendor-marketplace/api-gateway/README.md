# API Gateway for Multi-Vendor Marketplace

This directory contains the implementation of the API Gateway for the Multi-Vendor Marketplace project. The API Gateway serves as a single entry point for all client requests and is responsible for routing requests to the appropriate microservices.

## Features

- **Centralized Request Routing**: The API Gateway routes incoming requests to the appropriate microservice based on the request path.
- **Authentication**: It handles JWT-based authentication to ensure secure access to the services.
- **Load Balancing**: Distributes incoming requests across multiple instances of microservices to ensure high availability and reliability.
- **Rate Limiting**: Implements rate limiting to prevent abuse and ensure fair usage of the services.
- **Logging and Monitoring**: Provides logging and monitoring capabilities for tracking requests and performance metrics.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd multi-vendor-marketplace/api-gateway
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the API Gateway**:
   ```bash
   npm start
   ```

4. **Access the API Gateway**:
   The API Gateway will be accessible at `http://localhost:<port>`, where `<port>` is the port specified in your configuration.

## Directory Structure

- `src/routes`: Contains route definitions for the API Gateway.
- `src/middleware`: Contains middleware functions for request handling.

## Docker

To build and run the API Gateway using Docker, follow these steps:

1. **Build the Docker Image**:
   ```bash
   docker build -t api-gateway .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -p <host-port>:<container-port> api-gateway
   ```

Replace `<host-port>` and `<container-port>` with the appropriate port numbers.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.