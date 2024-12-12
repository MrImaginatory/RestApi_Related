# REST API Project

This repository contains a comprehensive RESTful API with modular routes for authentication and feature-specific functionalities. It demonstrates a scalable and maintainable architecture for backend development using Node.js and Express.

---

## Features

### Authentication

- 🔒 Secure user login and signup routes.
- 🔐 JWT-based authentication for session management.

### Feature-Based Functionality

- 🔍 Data retrieval, search, and aggregation functionalities through dedicated routes.

---

## Technologies Used

- 🟢 **Node.js**
- 🚀 **Express**
- 🗄️ **MongoDB** (Mongoose)
- 🔑 **JWT** for Authentication
- 🔒 **Bcryptjs** for Password Hashing

---

## Installation

1. 📥 Clone the repository:

   ```bash
   git clone https://github.com/MrImaginatory/RestApi_Related.git
   cd RestApi_Related
   ```

2. 📦 Install dependencies:

   ```bash
   npm install
   ```

3. 🛠️ Set up environment variables:

   - Rename `.envSample` to `.env`.
   - Update the file with your configuration (e.g., database URI, secret keys).

4. 🚀 Start the server:

   ```bash
   npm start
   ```

   By default, the server runs on `http://localhost:3001`.

---

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

### CRUD Routes

- **GET** `/crud/searchData`: Search data.
  - URL: [http://localhost:3001/crud/searchData/?id=objectId](http://localhost:3001/crud/searchData/?id=objectId)
  - URL: [http://localhost:3001/crud/searchData/?email=emailId](http://localhost:3001/crud/searchData/?email=emailId)

- **POST** `/crud/updateData`: Update functionality.
  - URL: [http://localhost:3001/crud/updateData/:id](http://localhost:3001/crud/updateData/:id)

- **POST** `/crud/deleteData`: Delete a record.
  - URL: [http://localhost:3001/crud/deleteData/:id](http://localhost:3001/crud/deleteData/:id)

### Axios Data Routes

- **GET** `/axiosData/fetchData`: Fetch all data.
  - URL: [http://localhost:3001/axiosData/fetchData](http://localhost:3001/axiosData/fetchData)

- **GET** `/axiosData/fetchUserId/:id`: Fetch user by ID.
  - URL: [http://localhost:3001/axiosData/fetchUserId/:id](http://localhost:3001/axiosData/fetchUserId/:id)

- **GET** `/axiosData/fetchUserData`: Fetch user by query parameters.
  - URL: [http://localhost:3001/axiosData/fetchUserData?firstName=firstname](http://localhost:3001/axiosData/fetchUserData?firstName=firstname)
  - URL: [http://localhost:3001/axiosData/fetchUserData?lastName=lastname](http://localhost:3001/axiosData/fetchUserData?lastName=lastname)
  - URL: [http://localhost:3001/axiosData/fetchUserData?email=email](http://localhost:3001/axiosData/fetchUserData?email=email)

### Coupon Data Routes

- **POST** `/shopping/addCoupon`: Add a Disount Coupon
  - URL: [http://localhost:3001/shopping/addCoupon](http://localhost:3001/shopping/addCoupon)

- **POST** `/shopping/validate`: Validate Disount Coupon
  - URL: [http://localhost:3001/shopping/validate](http://localhost:3001/shopping/validate)
 
### Email Routes

- **POST** `/email/sendEmail`: Send an Email
  - URL: [http://localhost:3001/email/sendEmail](http://localhost:3001/email/sendEmail)

---

## Testing the API

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/). Ensure the server is running locally at `http://localhost:3001`.

### Sample `.env` Configuration

```env
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are always welcome! 🙌

---

## License

This project is licensed under the [MIT License](LICENSE).

