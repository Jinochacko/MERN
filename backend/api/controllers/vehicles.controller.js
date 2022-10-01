import VehiclesDao from "../dao/vehicles.dao.js";

export default class VehiclesController {
  static getVehicles = async (_req, res) => {
    const vehicles = await VehiclesDao.getVehicles();
    res.json(vehicles);
  };

  static addVehicle = async (req, res) => {
    try {
      const addedData = await VehiclesDao.addVehicle(req.body);
      res.json(addedData);
    } catch (e) {
      res.status(500).json(e.stack);
    }
  };

  static deleteVehicle = async (req, res) => {
    const result = await VehiclesDao.purgeVehicles(req.body.id);
    res.json(result);
  };
}
