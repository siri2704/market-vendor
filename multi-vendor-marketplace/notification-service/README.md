# Notification Service

The Notification Service is a crucial component of the Multi-Vendor Marketplace, responsible for managing real-time notifications for users and vendors. This service ensures that users receive timely updates regarding their orders, promotions, and messages.

## Features

- **Real-Time Notifications**: Utilizes WebSockets or Kafka for low-latency message delivery.
- **Order Updates**: Notifies users about the status of their orders, including confirmations, shipping updates, and delivery notifications.
- **Promotional Alerts**: Sends notifications about ongoing promotions and special offers to enhance user engagement.
- **User Messaging**: Facilitates communication between users and vendors through notifications.

## Architecture

The Notification Service is designed to be loosely coupled with other microservices in the marketplace. It communicates with the Order Service to receive updates on order statuses and with the User Service to manage user preferences for notifications.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd multi-vendor-marketplace/notification-service
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Service**: 
   ```
   npm start
   ```

4. **Docker Setup**: To build and run the service using Docker, execute:
   ```
   docker build -t notification-service .
   docker run -p 3000:3000 notification-service
   ```

## API Endpoints

- **POST /notifications**: Create a new notification.
- **GET /notifications**: Retrieve notifications for a user.
- **DELETE /notifications/:id**: Delete a specific notification.

## Contribution

Contributions to the Notification Service are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.