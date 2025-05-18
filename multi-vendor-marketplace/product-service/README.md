# Product Service

The Product Service is a crucial component of the Multi-Vendor Marketplace. It is responsible for managing all product-related functionalities, including product listing, inventory tracking, and category management.

## Features

- **Product Listing**: Vendors can list their products with detailed descriptions, prices, and images.
- **Search Functionality**: Users can search for products based on various criteria such as name, category, and price range.
- **Category Management**: Products can be organized into categories for easier navigation.
- **Stock and Inventory Tracking**: The service keeps track of product stock levels and alerts vendors when inventory is low.
- **Image Uploads**: Vendors can upload images for their products, ensuring a visually appealing marketplace.
- **Data Validation**: The service validates product data to ensure accuracy and consistency.

## Architecture

The Product Service is built using Node.js and follows a microservices architecture. It communicates with other services such as the User Service, Order Service, and Notification Service through RESTful APIs.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/multi-vendor-marketplace.git
   ```

2. Navigate to the product service directory:
   ```
   cd multi-vendor-marketplace/product-service
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the service:
   ```
   npm start
   ```

## API Endpoints

- **GET /products**: Retrieve a list of all products.
- **POST /products**: Add a new product (requires vendor authentication).
- **GET /products/:id**: Retrieve details of a specific product.
- **PUT /products/:id**: Update a product (requires vendor authentication).
- **DELETE /products/:id**: Delete a product (requires vendor authentication).

## Docker

To build and run the Product Service using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t product-service .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 product-service
   ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.