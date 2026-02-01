import express, { type IRouter } from "express";
import getDatabaseConnection from "../controllers/getDatabaseConnection.ts";

const router: IRouter = express.Router();

router.get("/getDatabaseConnection", getDatabaseConnection);

export default router;
