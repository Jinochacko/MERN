import CurrencyDao from "../dao/currency.dao.js";

export default class CurrencyController {
  static getCurrencies = async (_req, res) => {
    try {
      const currencies = await CurrencyDao.getCurrencies();
      res.json(currencies);
    } catch (error) {
      res.status(500).json(error.stack);
    }
  };

  static addCurrency = async (req, res) => {
    try {
      const addedData = await CurrencyDao.addCurrency(req.body);
      res.json(addedData);
    } catch (e) {
      res.status(500).json(e.stack);
    }
  };
}
