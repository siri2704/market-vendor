# Multi-Vendor Marketplace Frontend (React + Vite)

This is the common frontend for the multi-vendor marketplace microservices project. It is built with React and Vite for high performance and modularity.

## Features
- Modular structure for easy integration with all backend microservices
- Service-oriented architecture: all backend APIs are accessed via environment variables
- Ready for Docker and Kubernetes deployment

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. The app will be available at `http://localhost:5173` by default.

## Environment Variables
- Configure API endpoints for each microservice in a `.env` file at the project root.

## Build for Production
```sh
npm run build
```

## License
MIT
