import express, { type IRouter } from "express";
import getHello from "../controllers/getHello.js";

const router: IRouter = express.Router();

router.get("/getHello", getHello);

export default router;
