// Import Statements
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./db/db_connect");

// Initializations (variables, constants, etc.)
const app = express();

// middleware
app.use(express.json());

// Connect to Database
connectToDatabase(process.env.DB_NAME);

// Routes
app
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

// Server (Listen)

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}\n`);
  if (process.env.NODE_ENV === "development") {
    console.log(`>> http://localhost:${process.env.PORT}`);
    console.log(`>> http://localhost:${process.env.PORT}/api-docs\n`);
  }
});
// localhost
// app.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });
