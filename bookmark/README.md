# Bookmark API

## Overview
This project is a Node.js application built with TypeScript and MongoDB. It provides a RESTful API for managing a collection of books, allowing users to create, read, update, and delete book entries.

## Project Structure
```
bookmark
├── src
│   ├── controllers        # Contains the business logic for handling book data
│   ├── models             # Defines the Mongoose model for book documents
│   ├── routes             # Sets up the API routes for book-related endpoints
│   ├── middleware         # Contains middleware for authentication
│   ├── app.ts             # Initializes the Express application and middleware
│   └── server.ts          # Entry point for starting the server
├── tests                  # Contains test cases for the application
├── package.json           # Lists project dependencies and scripts
├── tsconfig.json          # TypeScript compiler options
├── .env                   # Environment variables for configuration
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd bookmark
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string and any other necessary environment variables.

4. **Run the application:**
   ```
   npm start
   ```

5. **Run tests:**
   ```
   npm test
   ```

## API Endpoints

### Books
- **GET /books**: Retrieve a list of all books.
- **GET /books/:id**: Retrieve a specific book by ID.
- **POST /books**: Create a new book.
- **PUT /books/:id**: Update an existing book by ID.
- **DELETE /books/:id**: Delete a book by ID.

## License
This project is licensed under the MIT License.