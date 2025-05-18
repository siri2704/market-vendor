# User Service for Multi-Vendor Marketplace

This directory contains the implementation of the User Service for the Multi-Vendor Marketplace project. The User Service is responsible for managing user accounts, including registration, login, and profile management. It also handles vendor management, allowing users to become sellers on the platform.

## Features

- **User Registration**: Allows new users to create an account.
- **User Login**: Authenticates users and provides access to their accounts.
- **Profile Management**: Users can update their personal information and manage their profiles.
- **Vendor Management**: Users can apply to become vendors and manage their product listings.
- **JWT Authentication**: Secure authentication using JSON Web Tokens.
- **Role-Based Access Control**: Different access levels for users and vendors.

## Directory Structure

- `src/controllers`: Contains controller files for handling user-related requests.
- `src/models`: Contains model files defining the user data structure.
- `src/routes`: Contains route definitions for user-related endpoints.
- `src/services`: Contains service files for business logic related to users.

## Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/multi-vendor-marketplace.git
   ```

2. **Navigate to the user-service directory**:
   ```
   cd multi-vendor-marketplace/user-service
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the service**:
   ```
   npm start
   ```

## Docker

To build and run the User Service using Docker, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t user-service .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 3000:3000 user-service
   ```

## API Documentation

Refer to the `src/routes` directory for detailed API endpoint documentation.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.