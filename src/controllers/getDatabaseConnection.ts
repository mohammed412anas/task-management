import type { Request, Response } from "express";
import sequelize from "../config/index.js";

const getDatabaseConnection = async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    res.status(200).send("Connection has been established successfully.");
  } catch (error) {
    res.status(500).send("Unable to establish connection.");
  }
};

export default getDatabaseConnection;
