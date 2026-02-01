import express, { type IRouter } from "express";
import getDatabaseConnection from "../controllers/getDatabaseConnection.js";

const router: IRouter = express.Router();

router.get("/getDatabaseConnection", getDatabaseConnection);

export default router;
