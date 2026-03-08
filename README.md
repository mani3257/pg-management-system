# Radha Krishna PG Management System

A full stack PG (Paying Guest) management web application built using React, Node.js, Express, and PostgreSQL.

## Features

* Room booking system
* Admin login
* Update room availability
* View booking requests
* PostgreSQL database integration
* REST API tested with Postman

## Tech Stack

Frontend:

* React
* Tailwind CSS
* Vite

Backend:

* Node.js
* Express.js

Database:

* PostgreSQL

Tools:

* Postman
* VS Code
* GitHub

## Project Structure

```
radha-krishna-pg
│
├── backend
│   ├── server.js
│   ├── db.js
│   └── package.json
│
├── frontend
│   └── radha-krishna-pg-management
│
└── README.md
```

## How to Run the Project

### 1. Start Backend

```
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

### 2. Start Frontend

```
cd frontend/radha-krishna-pg-management
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## API Endpoints

POST /book
Create a new booking request

POST /admin/login
Admin authentication

GET /rooms
Fetch room availability

PUT /rooms/:id
Update room vacancy

GET /bookings
View all booking requests

## Admin Credentials

```
username: mani
password: 1234
```

## Author

Mani Kumar Reddy
