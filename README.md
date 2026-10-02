# User Info Management App

A full-stack web application that collects user details through a React frontend and saves them to MongoDB via an Express API. The project includes a home page, a user registration form, and a page to view saved users.

## Overview

This project combines:

- React + Vite for the frontend
- React Router for page navigation
- Express.js for the backend API
- MongoDB for persistent storage
- CORS for communication between the frontend and API

## Project Structure

```text
graded-project/
├── public/                # Static assets
├── server/
│   ├── app.js             # Express server and API routes
│   ├── db.js              # MongoDB connection setup
│   └── package.json       # Backend dependencies
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Home, form, and list pages
│   ├── App.jsx            # App routing setup
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styling
├── package.json           # Frontend dependencies and scripts
├── vite.config.js         # Vite configuration
├── index.html             # Root HTML file
├── eslint.config.js       # ESLint config
└── README.md              # Project documentation
```

## Features

- User form to submit a username, email, and role
- Save submitted information to a MongoDB database
- Retrieve and display saved users
- Navigation between pages using React Router

## Tech Stack

- Frontend: React 19, Vite, React Router
- Backend: Node.js, Express
- Database: MongoDB Atlas or local MongoDB
- API: REST endpoints for submit and fetch users

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or newer recommended)
- npm
- MongoDB connection details (local MongoDB or MongoDB Atlas)

## Installation

1. Clone the repository
2. Install frontend dependencies:

```bash
npm install
```

3. Install backend dependencies:

```bash
cd server
npm install
```

## Configuration

The backend currently connects to MongoDB in `server/db.js`. Update the connection string with your actual database credentials before starting the server.

Example:

```js
const client = new MongoClient("mongodb+srv://<username>:<password>@cluster.mongodb.net/?appName=Cluster0");
```

> For a real project, it is recommended to store the MongoDB URI in an environment variable instead of hardcoding it in the source code.

## Running the Application

Open two terminals.

### 1) Start the backend

```bash
cd server
node app.js
```

The server runs on:

```text
http://localhost:5000
```

### 2) Start the frontend

In a separate terminal from the project root:

```bash
npm run dev
```

The frontend runs on the Vite default port:

```text
http://localhost:5173
```

## API Endpoints

### POST /submit

Creates a new user record in MongoDB.

Request body:

```json
{
  "userName": "John Doe",
  "email": "john@example.com",
  "userRole": "Admin"
}
```

### GET /users

Returns all saved users from the database.

## Routes

The app currently includes these routes:

- `/` - Home page
- `/userinfo` - User form page
- `/userList` - User list page

## Notes

This project is a learning/demo application and may still require cleanup or bug fixes depending on the current state of the code. If you are using it as a starter project, ensure the frontend form and backend API are both working together before deploying.

## Scripts

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

### Backend

```bash
cd server
node app.js
```

## License

This project is for educational use.
