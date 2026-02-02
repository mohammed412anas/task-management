import type { Request, Response } from "express";
import createItemTask from "../services/createItemTask/createItemTask.js";

const createTask = async (req: Request, res: Response) => {
  try {
    const { id, taskName } = req.body;
    const response = await createItemTask(Number(id), taskName);
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default createTask;
