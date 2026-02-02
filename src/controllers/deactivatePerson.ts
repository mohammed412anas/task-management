import type { Request, Response } from "express";
import deactivateRecord from "../services/deactivateRecord/deactivateRecord.js";

const deactivatePerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deactivateRecord(Number(id));
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default deactivatePerson;
