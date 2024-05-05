const express = require("express");
const router = require("./routes/route");
const dotenv = require("dotenv");
const connect = require("./config/dbConfig");
const cors = require("cors");

const app = express();
app.use(cors())
dotenv.config();
connect();
app.use(express.json());

app.use(router);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
