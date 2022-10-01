import mongodb from "mongodb";
import Vehicles from "../models/vehicles.model.js";

export default class VehiclesDao {
  static getVehicles = async () => {
    try {
      return await Vehicles.find().sort({ createdAt: -1 });
    } catch (error) {
      return error.stack;
    }
  };

  static addVehicle = async ({
    name,
    model,
    variant,
    price,
    fuel,
    milage,
    manufacturer,
    images,
  }) => {
    try {
      return await Vehicles.create({
        name,
        model,
        variant,
        price,
        fuel,
        milage,
        manufacturer,
        images,
      });
    } catch (error) {
      return error.stack;
    }
  };

  static purgeVehicles = async (id) => {
    try {
      return await Vehicles.deleteOne({ _id: mongodb.ObjectId(id) });
    } catch (error) {
      return error.stack;
    }
  };
}
