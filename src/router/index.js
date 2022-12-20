import express from "express";
const router = express.Router();
import { list, get, create, submit, report } from "../controllers/form.js";

router.post("/form", create);
router.get("/form", list);
router.get("/form/:token", get);
router.post("/form/:token/submit", submit);
router.get("/form/:token/report", report);

export default router;

