const mysql = require('mysql2');

// MySQL connection configuration
const config = {
	host: 'localhost',
	user: 'root',
	password: 'password',
	port: 3306,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
	if (err) {
		console.error('Error connecting to MySQL:', err);
		throw err;
	}
	console.log('Connected to MySQL database.');

	// Create the database 'orders_db' if it doesn't exist
	connection.query('CREATE DATABASE IF NOT EXISTS orders_db', (err) => {
		if (err) {
			console.error('Error creating database:', err);
			throw err;
		}
		console.log('Database orders_db created or already exists.');

		// Use the 'orders_db' database
		connection.query('USE orders_db', (err) => {
			if (err) {
				console.error('Error selecting database:', err);
				throw err;
			}
			console.log('Using database orders_db.');
			// const a = 'drop table orders'
			// connection.query(a);
			// Define the table 'Orders' schema and create it
			const createTableQuery = `
        CREATE TABLE IF NOT EXISTS orders (
		  id INT AUTO_INCREMENT PRIMARY KEY,
		  email VARCHAR(255) NOT NULL,
		  fullName VARCHAR(255) NOT NULL,
		  fullAddress TEXT NOT NULL,
		  imageUrls JSON,
		  frameColor VARCHAR(50),
		  user VARCHAR(255),
		  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		);

      `;

			connection.query(createTableQuery, (err) => {
				if (err) {
					console.error('Error creating table:', err);
					throw err;
				}
				console.log('Table Orders created or already exists.');

				// Close MySQL connection
				connection.end((err) => {
					if (err) {
						console.error('Error closing connection:', err);
						throw err;
					}
					console.log('MySQL connection closed.');
				});
			});
		});
	});
});
