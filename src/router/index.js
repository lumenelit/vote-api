const express = require("express");
const router = express.Router();
const con = require("../controllers/cons");

router.get("/", (req, res) => {
  res.send("hello world");
});
router.get("/test", con.a);
module.exports = router;
