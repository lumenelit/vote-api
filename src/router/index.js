const express = require("express");
const router = express.Router();
const form = require("../controllers/form");

router.get("/forms", form.list);
router.get("/forms/:token", form.get);
router.post("/forms/:token", form.create);
router.post("/forms/:token/submit", form.submit);
router.get("/forms/:token/report", form.report);

module.exports = router;
