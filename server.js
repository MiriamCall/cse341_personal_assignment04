// Import Statements
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./db/db_connect");

// Initializations (variables, constants, etc.)
const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

// middleware
app.use(express.json());

// Connect to Database
connectToDatabase(process.env.DB_NAME);

// Routes
app.use("/", require("./routes"));

// Server (Listen)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// localhost
// app.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });
