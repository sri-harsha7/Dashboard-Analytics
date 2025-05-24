const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
