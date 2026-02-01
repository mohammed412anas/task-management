import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize({
  database: process.env["DATA_BASE"] as string,
  username: process.env["USER_NAME"] as string,
  password: process.env["PASSWORD"] as string,
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
