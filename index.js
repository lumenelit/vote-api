import express from "express";
const app = express();
import routes from "./src/router/index.js";
const PORT = 4000;

// cors bypass
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

app.use(express.json());
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
