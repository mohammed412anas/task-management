import express, { type IRouter } from "express";
import creatPerson from "../controllers/createPerson.js";
import getPeople from "../controllers/getPeople.js";
import deactivatePerson from "../controllers/deactivatePerson.js";
import getActivePeople from "../controllers/getActivePeople.js";

const router: IRouter = express.Router();

router.post("/createPerson", creatPerson);
router.get("/getPeople", getPeople);
router.put("/deactivatePerson/:id", deactivatePerson);
router.get("/getActivePeople", getActivePeople);

export default router;
