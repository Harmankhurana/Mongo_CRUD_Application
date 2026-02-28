# Mongo CRUD Application – Backend

This project is the backend of a MongoDB-based CRUD application built using Node.js, Express, and MongoDB.

It provides authentication functionality (Signup & Signin) with secure password hashing and input validation.

---

## 📌 Overview

This backend server:

- Connects to MongoDB using Mongoose
- Provides REST API endpoints
- Validates user input using Zod
- Hashes passwords securely using bcrypt
- Generates JWT tokens for authentication
- Uses Express Router for clean modular routing
- Loads environment variables using dotenv

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Zod (Input Validation)
- bcrypt (Password Hashing)
- JSON Web Token (JWT)
- dotenv
- Nodemon (Development)

---

## 📂 Project Structure
Mongo_CRUD_Application/
│
├── routes/
│ └── user.js
│
├── database/
│ └── db.js
│
├── middleware/
│ └── auth.middleware.js
│
├── index.js
├── package.json
└── .env


---

## 🔐 Features

### 1️⃣ User Signup

- Validates input using Zod
- Hashes password using bcrypt
- Stores user in MongoDB

### 2️⃣ User Signin

- Checks if user exists
- Compares hashed passwords
- Generates JWT token upon successful login

---


## ▶️ Running the Project
- Install dependencies
```bash
    npm install
```
- Start server
```bash
    npm run dev
```

---

## ⭐ Future Improvements

- Email format validation
- Strong password rules
- Role-based authentication
- Refresh tokens
- Error handling middleware
- Production-level logging