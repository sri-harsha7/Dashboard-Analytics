const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const cors = require("cors");
const connectDB = require("./config/DB");
const userRoute = require("./routes/userRoute");
const menuRoute = require("./routes/menuRoute");
const orderRoute = require("./routes/orderRoute");
const analyticsRoute = require("./routes/analyticsRoute");
const tableRoute = require("./routes/tableRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});
app.use("/users", userRoute);
app.use("/menu", menuRoute);
app.use("/order", orderRoute);
app.use("/analytics", analyticsRoute);
app.use("/table", tableRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
