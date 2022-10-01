import Fueltypes from "../models/fueltypes.model.js";

export default class CurrencyDao {
  static getFueltypes = async () => {
    try {
      return await Fueltypes.find().sort({ type: 1 });
    } catch (error) {
      return error.stack;
    }
  };

  static addFueltypes = async ({ name }) => {
    try {
      return await Fueltypes.create({ name });
    } catch (error) {
      return error.stack;
    }
  };
}
