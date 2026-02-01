import express, { type IRouter } from "express";
import creatPerson from "../controllers/createPerson.js";
import getPeople from "../controllers/getPeople.js";

const router: IRouter = express.Router();

router.post("/createPerson", creatPerson);
router.get("/getPeople", getPeople);

export default router;
