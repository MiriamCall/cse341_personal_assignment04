const { MongoClient } = require("mongodb");

const connectToDatabase = async (db_name) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
    const db = client.db(db_name);
    return db;
  } catch (error) {
    console.error("Error connecting to the database");
    console.error(error);
  }
};

module.exports = connectToDatabase;
