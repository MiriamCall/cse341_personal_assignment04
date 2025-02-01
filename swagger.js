const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE 341 API Docs",
    description: "CSE 341 API Documentation",
  },
  host: "https://cse341-personal-assignment04.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import("./server.js");
// });
