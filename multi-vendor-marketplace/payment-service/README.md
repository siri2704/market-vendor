# Payment Service

This directory contains the implementation of the Payment Service for the Multi-Vendor Marketplace. The Payment Service is responsible for handling all payment-related functionalities, including secure payment processing, order confirmations, refunds, and transaction history.

## Features

- **Secure Payment Processing**: Integrates with payment gateways such as Stripe, Razorpay, or PayPal to facilitate secure transactions.
- **Order Confirmation**: Sends order confirmation notifications to users upon successful payment.
- **Refund Management**: Handles refund requests and processes them through the payment gateway.
- **Transaction History**: Maintains a record of all transactions for users and vendors.
- **Invoice Generation**: Generates invoices for completed transactions for user reference.

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd multi-vendor-marketplace/payment-service
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Environment Variables**:
   Ensure to set up the necessary environment variables for the payment gateway integration. Create a `.env` file in the root of the payment service directory with the following variables:
   ```
   PAYMENT_GATEWAY_API_KEY=<your_api_key>
   PAYMENT_GATEWAY_SECRET=<your_secret_key>
   ```

4. **Run the Service**:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/payments**: Initiates a payment process.
- **GET /api/payments/:id**: Retrieves payment details by payment ID.
- **POST /api/payments/refund**: Processes a refund request.

## Testing

To run tests for the Payment Service, use the following command:
```
npm test
```

## Docker

To build and run the Payment Service using Docker, execute:
```
docker build -t payment-service .
docker run -p 3000:3000 payment-service
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.