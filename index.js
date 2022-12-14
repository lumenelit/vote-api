const express = require("express");
const app = express();
const routes = require("./src/router");
const PORT = 4000;
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
