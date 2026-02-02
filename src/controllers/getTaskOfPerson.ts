import type { Request, Response } from "express";
import getItemTaskOfPerson from "../services/getItemTaskOfPerson/getItemTaskOfPerson.js";

const getTaskOfPerson = async (req: Request, res: Response) => {
  try {
    const { personId } = req.params;
    const response = await getItemTaskOfPerson(Number(personId));
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default getTaskOfPerson;
