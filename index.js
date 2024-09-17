// index.js
const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employee");

const app = express();

const startServer = async () => {
  await connectDB();

  app.use(express.json()); // To parse JSON body

  // Use the employee routes
  app.use("/api/employees", employeeRoutes);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

startServer();
