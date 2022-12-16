import express from "express";
const router = express.Router();
import { list, get, create, submit, report } from "../controllers/form.js";

router.get("/forms", list);
router.get("/form/:token", get);
router.post("/form/:token", create);
router.post("/form/:token/submit", submit);
router.get("/form/:token/report", report);

export default router;

