const express = require("express");
const router = require("./routes/route");
const dotenv = require("dotenv");
const connect = require("./config/dbConfig");

const app = express();
dotenv.config();
connect();
app.use(express.json());

app.use("/api/post",router);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
