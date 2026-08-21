# Expense Tracker API

A secure RESTful backend API for managing personal expenses, built with **Node.js, Express.js, and MongoDB**. The application provides user registration and authentication using **JWT**, allowing each user to securely manage their own expenses through complete CRUD operations.

The project demonstrates core backend concepts including **REST API design, user authentication, password hashing, authorization, database modeling, and protected resources**.

## Tech Stack

| Technology             | Purpose                                                   |
| ---------------------- | --------------------------------------------------------- |
| **Node.js**            | JavaScript runtime for building the backend               |
| **Express.js**         | Web framework for creating API routes and middleware      |
| **MongoDB**            | NoSQL database for storing users and expenses             |
| **Mongoose**           | ODM for defining schemas and interacting with MongoDB     |
| **bcrypt**             | Securely hashes user passwords before storing them        |
| **jsonwebtoken (JWT)** | Generates and verifies authentication tokens              |
| **dotenv**             | Manages environment variables and sensitive configuration |
| **nodemon**            | Automatically restarts the server during development      |

## Authentication APIs

**Base Route:** `/api/users`

| Method | Endpoint    | Description                                    | Request Body                          |
| ------ | ----------- | ---------------------------------------------- | ------------------------------------- |
| `POST` | `/register` | Creates a new user account                     | `{ "username", "email", "password" }` |
| `POST` | `/login`    | Authenticates the user and returns a JWT token | `{ "email", "password" }`             |

## Expense APIs

**Base Route:** `/api/expenses`

| Method   | Endpoint | Description                                            | Authentication |
| -------- | -------- | ------------------------------------------------------ | -------------- |
| `POST`   | `/`      | Creates a new expense for the logged-in user           | ✅ JWT Required |
| `GET`    | `/`      | Retrieves all expenses belonging to the logged-in user | ✅ JWT Required |
| `PUT`    | `/:id`   | Updates an expense by its ID                           | ✅ JWT Required |
| `DELETE` | `/:id`   | Deletes an expense by its ID                           | ✅ JWT Required |

## Key Features

* **User Registration & Login** – Users can securely create accounts and authenticate.
* **JWT Authentication** – Protected endpoints require a valid JWT token.
* **Password Security** – Passwords are hashed using bcrypt and never stored as plain text.
* **Expense CRUD Operations** – Users can create, retrieve, update, and delete their expenses.
* **User-Level Authorization** – Each user can access and modify only their own expense records.
* **MongoDB Integration** – Mongoose models provide structured interaction with the database.
* **Environment-Based Configuration** – Sensitive credentials and configuration are managed through `.env`.

## Example Workflow

`Register → Login → Receive JWT → Send JWT with Expense Requests → Access Own Expenses`

This project is a practical example of how a backend application handles **authentication, authorization, RESTful API design, database operations, and secure user-specific data management**.
