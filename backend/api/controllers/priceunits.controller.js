import PriceunitsDao from "../dao/priceunits.dao.js";

export default class PriceunitsController {
  static getUnits = async (_req, res) => {
    try {
      const units = await PriceunitsDao.getUnits();
      res.json(units);
    } catch (error) {
      res.status(500).json(error.stack);
    }
  };

  static addPriceUnit = async (req, res) => {
    try {
      const addedData = await PriceunitsDao.addPriceUnit(req.body);
      res.json(addedData);
    } catch (e) {
      res.status(500).json(e.stack);
    }
  };
}
