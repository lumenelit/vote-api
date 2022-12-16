import express from "express";
const app = express();
import routes from "./src/router/index.js";
const PORT = 4000;
app.use(express.json());
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
