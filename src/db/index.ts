import { Sequelize } from 'sequelize';
import config from 'config';

const dbConfig = config.get('db');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
  }
);

export default sequelize;
