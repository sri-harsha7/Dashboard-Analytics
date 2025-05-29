const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const cors = require("cors");
const connectDB = require("./config/DB");
const userRoute = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
