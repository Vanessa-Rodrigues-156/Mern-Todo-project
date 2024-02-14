const mongoose = require("mongoose");
require("dotenv").config();

//MONGO_URI = "mongodb+srv://ClusterV1:dbv@clusterv1.pzzsidx.mongodb.net/?retryWrites=true&w=majority";
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("MongoDB is connected"));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
