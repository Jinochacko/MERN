import Currency from "../models/currency.model.js";

export default class CurrencyDao {
  static getCurrencies = async () => {
    try {
      return await Currency.find().sort({ type: 1 });
    } catch (error) {
      return error.stack;
    }
  };

  static addCurrency = async ({ type, symbol }) => {
    try {
      return await Currency.create({
        type,
        symbol,
      });
    } catch (error) {
      return error.stack;
    }
  };
}
