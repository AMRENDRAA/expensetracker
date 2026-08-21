Expense Tracker API

A simple backend REST API for tracking personal expenses. 
Built with Node.js, Express, and MongoDB. Users can register, log in, and manage their own list of expenses (create, view, update, delete) — each user only sees their own data, protected by JWT authentication.

This project is a good example for beginners learning how backend APIs handle users, authentication, and CRUD operations (Create, Read, Update, Delete).


Tech Stack
Tool	Purpose
Express	Web framework for building the API routes
Mongoose	Talks to MongoDB using JavaScript objects (models)
bcrypt	Hashes passwords so they're never stored as plain text
jsonwebtoken (JWT)	Creates a login "token" so the API knows who's making a request
dotenv	Loads secret config (like DB URL) from a .env file
nodemon	Auto-restarts the server while you're developing

expensetracker/
├── server.js                     # App entry point — starts the server
├── Config/
│   └── DbConnection.js           # Connects to MongoDB
├── Model/
│   ├── ExpenseModel.js           # Schema/shape of an "expense" document
│   └── ExpenseUserModel.js       # Schema/shape of a "user" document
├── Controller/
│   ├── expenseController.js      # Logic for creating/reading/updating/deleting expenses
│   └── expenseUserController.js  # Logic for registering & logging in users
├── route/
│   ├── expenseRoute.js           # URLs for expense actions (/api/expenses)
│   └── expenseUserRoute.js       # URLs for auth actions (/api/users)
├── Middleware/
│   └── validatetoken.js          # Checks the JWT token before letting a request through
└── fix.js                        # One-off script to clean up old data in the DB

Auth (/api/users)
Method	Endpoint	Description	Body
POST	/api/users/register	Create a new account	{ "username", "email", "password" }
POST	/api/users/login	Log in and get a JWT token	{ "email", "password" }




Method	Endpoint	Description	Auth required
POST	/api/expenses	Add a new expense	✅
GET	/api/expenses	Get all expenses for the logged-in user	✅
PUT	/api/expenses/:id	Update an expense by its ID	❌ (see note below)
DELETE	/api/expenses/:id	Delete an expense by its ID	❌ (see note below)


