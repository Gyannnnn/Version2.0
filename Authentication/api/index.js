const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");
const userModel = require("./Models/User");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const authRouter = require("./Routes/authRouter")
const product = require("./Routes/product")

app.use(bodyParser.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Hello World");
});

app.use('/auth',authRouter);
app.use('/products',product)

app.listen(PORT, () => {
  console.log(`App Is Running At ${PORT}`);
});
