
# Titan Senior Full Stack Home Assignment

This repository contains a Node.js application built with Express.js and Sequelize ORM, integrated with a MySQL database.

The application includes endpoints for getting random unsplashed urls and managing orders.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MySQL Server

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dav-sap/titan-ex.git
   cd titan-ex
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MySQL database:
   - You can start a MySQL service with the `Dockerfile` under `/dbs_dockers/mysql`
   - I created a migration with mysql, sequalize, but it wasn't working perfectly, so you have another file `create-db-table`. use it to create, db, table.
   - Update the database configuration in `config/default.ts`.

4. Start a Redis server:

   ```bash
   redis-server
   ```
    if you have it installed, again update config file as you see fit

5. Define your unsplash token:
   Go to the config file and paste your unsplash token in the config, so the API can work correctly
## Running the Application

Start the Node.js server:

```bash
npm start
```

The server will start running on `http://localhost:3000`.

## Endpoints

### Get photo URLS

- **URL:** `GET /photo-urls/:count`
- **Description:** get an X number of photo urls.
- **Example:**

  ```bash
  curl http://localhost:3000/photo-urls/5
  ```
  
### Create Order

- **URL:** `POST /orders`
- **Description:** Create a new order.
- **Request Body:**

  ```json
  {
    "email": "david@email.com",
    "fullName": "David Saper",
    "fullAddress": "Barcelona, Spain",
    "imageUrls": [
        "image1.jpg",
        "image2.jpg"
    ],
    "frameColor": "purple",
    "user": "david"
  }
  ```

### Get Orders by User

- **URL:** `GET /orders/:user`
- **Description:** Retrieve all orders for a specific user.
- **Parameters:**
    - `user`: user id of the user.
- **Example:**

  ```bash
  curl http://localhost:3000/orders/david
  ```

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Redis
