import type { Request, Response } from "express";
import getActiveRecords from "../services/getActiveRecords/getActiveRecords.js";

const getActivePeople = async (req: Request, res: Response) => {
  try {
    const activePeople = await getActiveRecords();
    res.status(200).send(activePeople);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default getActivePeople;
