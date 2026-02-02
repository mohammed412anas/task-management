import type { Request, Response } from "express";
import getItems from "../services/getItems/getItems.js";

const getTasks = async (req: Request, res: Response) => {
  try {
    const response = await getItems();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default getTasks;
