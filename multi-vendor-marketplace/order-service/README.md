# Order Service

The Order Service is a crucial component of the Multi-Vendor Marketplace, responsible for managing all order-related functionalities. This service handles order creation, updates, and tracking, ensuring a seamless experience for users and vendors.

## Features

- **Order Creation**: Allows users to create new orders based on their selected products.
- **Order Status Updates**: Provides real-time updates on the status of orders (e.g., pending, shipped, delivered).
- **Order History**: Users can view their past orders and their statuses.
- **Cart Management**: Users can manage their shopping cart, adding or removing items before finalizing their orders.
- **Integration with Payment Service**: Works closely with the Payment Service to process payments securely and efficiently.
- **Order Tracking**: Users can track their orders in real-time.

## Architecture

The Order Service is designed using a microservices architecture, allowing it to scale independently and communicate with other services via APIs. It utilizes a MongoDB database for storing order data and integrates with the Notification Service for real-time updates.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd multi-vendor-marketplace/order-service
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Service**: 
   ```
   npm start
   ```

4. **Docker Setup**: To build and run the service in a Docker container, use the following commands:
   ```
   docker build -t order-service .
   docker run -p 3000:3000 order-service
   ```

## API Endpoints

- **POST /orders**: Create a new order.
- **GET /orders/:id**: Retrieve order details by ID.
- **PUT /orders/:id**: Update order status.
- **GET /orders/user/:userId**: Get all orders for a specific user.

## Technologies Used

- **Node.js**: Backend framework for building the service.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: Database for storing order data.
- **Docker**: Containerization for easy deployment.
- **Kubernetes**: Orchestration for managing service deployment and scaling.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.