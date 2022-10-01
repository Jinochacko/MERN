import Manufactures from "../models/manufactures.model.js";

export default class ManufacturesDao {
  static getManufactures = async () => {
    try {
      return await Manufactures.find().sort({ name: 1 });
    } catch (error) {
      return error.stack;
    }
  };

  static addManufactures = async ({ name, country }) => {
    try {
      return await Manufactures.create({
        name,
        country,
      });
    } catch (error) {
      return error.stack;
    }
  };
}
