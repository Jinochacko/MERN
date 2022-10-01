import ManufacturesDao from "../dao/manufactures.dao.js";

export default class ManufacturesController {
  static getManufactures = async (_req, res) => {
    try {
      const manufactures = await ManufacturesDao.getManufactures();
      res.json(manufactures);
    } catch (error) {
      res.status(500).json(error.stack);
    }
  };

  static addManufactures = async (req, res) => {
    try {
      const addedData = await ManufacturesDao.addManufactures(req.body);
      res.json(addedData);
    } catch (e) {
      res.status(500).json(e.stack);
    }
  };
}
