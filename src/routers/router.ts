import express, { type IRouter } from "express";
import creatPerson from "../controllers/createPerson.js";

const router: IRouter = express.Router();

router.post("/createPerson", creatPerson);

export default router;
