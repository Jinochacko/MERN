import Priceunits from "../models/priceunits.model.js";

export default class PriceunitsDao {
  static getUnits = async () => {
    try {
      return await Priceunits.find().sort({ name: 1 });
    } catch (error) {
      return error.stack;
    }
  };

  static addPriceUnit = async ({ name, code }) => {
    try {
      return await Priceunits.create({
        name,
        code,
      });
    } catch (error) {
      return error.stack;
    }
  };
}
