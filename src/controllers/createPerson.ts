import type { Request, Response } from "express";
import createItem from "../services/createItem/createItem.js";

const creatPerson = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const response = await createItem(name, email);
    if (typeof response === "string") res.status(200).send(response);
    else res.status(400).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default creatPerson;
