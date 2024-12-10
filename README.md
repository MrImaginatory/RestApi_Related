# REST API Project

This repository contains a RESTful API with modular routes for authentication and feature-specific functionalities. It demonstrates a scalable architecture for backend development with Node.js and Express.

## Features

### Authentication
- User login and signup routes for secure access.
- JWT-based authentication.

### Feature-Based Functionality
- Data retrieval, search, and aggregation capabilities through dedicated routes.

## Technologies Used
- **Node.js**
- **Express**
- **MongoDB** (Mongoose)
- **JWT** for Authentication
- **Bcryptjs** for Password Hashing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MrImaginatory/RestApi_Related.git
   cd RestApi_Related
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Rename `.envSample` to `.env`.
   - Update the file with your configuration (e.g., database URI, secret keys).

4. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3001` by default.

## API Endpoints

### Authentication Routes
- **POST** `/auth/login`: User login.
  - URL: [http://localhost:3001/auth/login](http://localhost:3001/auth/login)

- **POST** `/auth/signup`: User registration.
  - URL: [http://localhost:3001/auth/signup](http://localhost:3001/auth/signup)

### Feature Routes
- **GET** `/feature/getData`: Retrieve data.
  - URL: [http://localhost:3001/feature/getData](http://localhost:3001/feature/getData)

- **GET** `/feature/search`: Search functionality.
  - URL: [http://localhost:3001/feature/search](http://localhost:3001/feature/search)

- **GET** `/feature/aggregate`: Perform aggregation operations.
  - URL: [http://localhost:3001/feature/aggregate](http://localhost:3001/feature/aggregate)

### Crud Routes
- **GET** `/crud/serachData`: Search data.
  - URL: [http://localhost:3001/crud/searchData/?id=objectId](http://localhost:3001/crud/searchData/?id=objectId)
  - URL: [http://localhost:3001/crud/searchData/?email=emailId](http://localhost:3001/crud/searchData/?email=emailId)

- **POST** `/crud/updateData`: Update functionality.
  - URL: [http://localhost:3001/crud/updateData/:id](http://localhost:3001/crud/updateData/:id)

- **POST** `/crud/deleteData`: Perform aggregation operations.
  - URL: [http://localhost:3001/crud/deleteData/:id](http://localhost:3001/crud/deleteData/:id)

## Testing the API

Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the endpoints. Ensure the server is running locally at `http://localhost:3001`.

### Sample `.env` Configuration
```env
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
