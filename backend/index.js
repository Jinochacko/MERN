// import mongodb from "mongodb";
import dotenv from "dotenv";
import app from "./server.js";
// import VehiclesModel from "./api/models/vehicles.model.js";
import mongoose from "mongoose";

dotenv.config();
// const MongoClient = new mongodb.MongoClient(process.env.VEHICULO_DB_URI);
const connecToDb = () => {
  try {
    mongoose.connect(process.env.VEHICULO_DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error.stack);
  }
};
const port = process.env.PORT || 8080;

connecToDb();

mongoose.connection.once("open", () => {
  app.listen(port, () => {
    console.log(`Connected to db and listening to port ${port}`);
  });
});
// MongoClient.connect()
//   .catch((error) => {
//     console.log(error.stack);
//     process.exit(1);
//   })
//   .then(async (connection) => {
//     await VehiclesModel.initCollection(connection);
//     app.listen(port, () => {
//       console.log(`Connected to db and listening to port ${port}`);
//     });
//   });
