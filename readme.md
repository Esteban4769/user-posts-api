# User Posts API

## Description
This Node.js Express server serves as the backend for your web application. It provides various routes for authentication, user management, posting, commenting, and error handling. The server is designed to work with a front-end client application that needs to make requests to these routes.

## Installation
To set up and run the server, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/yourusername/user-post-api.git
```


2. Change to the project directory:

```sh
cd your-server
```

3. Install dependencies:

```sh
npm install
```

4. Create a .env file in the root of your project and add the following configuration. Update the values as needed:

```sh
PORT=5000
CLIENT_URL=http://your-client-url.com
```

Replace http://your-client-url.com with the actual URL of your client application.


5. Start the server:

```sh
npm start
```

The server will start on the specified port or default to port 5000 if not provided.

## Configuration
The server is configured with the following key components:

- CORS: Cross-Origin Resource Sharing is enabled to allow requests from specific origins, including your client's URL (CLIENT_URL) and http://localhost:3000.

- Cookie Parsing: The server uses cookieParser to parse incoming cookies.

- JSON Body Parsing: Requests with JSON-encoded data are parsed using express.json() middleware.

- Routes: The server defines various routes and their associated handlers using routers. For example, authRouter handles authentication-related routes, userRouter handles user-related routes, and so on. Routes are structured under /routes in your project.

- Error Handling: The server includes an error middleware (errorMiddleware) to handle and respond to errors that may occur during the request/response cycle.

## Dependencies
The server uses several libraries and frameworks:

-  dotenv for managing environment variables.
- cors for handling Cross-Origin Resource Sharing.
- express as the web application framework.
- cookieParser for parsing cookies.
