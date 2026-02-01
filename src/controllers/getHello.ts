import type { Request, Response } from "express";

const getHello = async (req: Request, res: Response) => {
  try {
    res.status(200).send("Hello Anas!");
  } catch (error) {
    res.status(500).send(`Error while getting the hello message ${error}`);
  }
};

export default getHello;
