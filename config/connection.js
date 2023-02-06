// Import sequelize
const Sequelize = require("sequelize");
// Require dotenv to use .env file
require("dotenv").config();

// Initialize a sequelize instance to connect to our MySQL DB.
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

// if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//     sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });
// }

module.exports = sequelize;
