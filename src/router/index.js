import { Router } from "express";
const router = Router();
import { list, get, create, submit, report } from "../controllers/form.js";

router.get("/forms", list);
router.get("/forms/:token", get);
router.post("/forms/:token", create);
router.post("/forms/:token/submit", submit);
router.get("/forms/:token/report", report);

export default router;

