const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();
const dotenv = require("dotenv").config();
const initWebRoute = require("./routes");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8008;
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoute(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
