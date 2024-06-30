import express from 'express';
import photoUrlsRoutes from "./photo-urls/photo-urls.routes";
import ordersRoutes from "./orders/orders.routes";
import sequelize from './db'; // Import Sequelize instance

const app = express();
const port = 3000;


const start = async () => {
  try {

    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    app.use(express.json());

    app.use('/photo-urls', photoUrlsRoutes);
    app.use('/orders', ordersRoutes);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to start service:', error);
    process.exit(1);
  }
};

start();
