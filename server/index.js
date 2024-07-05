const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const route = require("./src/routes/route");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", route);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
