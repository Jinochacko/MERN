import FueltypesDao from "../dao/fueltypes.dao.js";

export default class CurrencyController {
  static getFueltypes = async (_req, res) => {
    try {
      const currencies = await FueltypesDao.getFueltypes();
      res.json(currencies);
    } catch (error) {
      res.status(500).json(error.stack);
    }
  };

  static addFueltypes = async (req, res) => {
    try {
      const addedData = await FueltypesDao.addFueltypes(req.body);
      res.json(addedData);
    } catch (e) {
      res.status(500).json(e.stack);
    }
  };
}
