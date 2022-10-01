import { useEffect, useState } from "react";
import "./App.css";
import http from "./modules/utils/http";

/**
 *
 * @param shape requested shape class name - default "" | optional
 * @returns class for image shape
 */
const getImageClassName = (shape = "") => {
  const shapes = [
    "right-oval",
    "left-oval",
    "right-petal",
    "left-petal",
    "side-clipped",
    "left-bottom-pointed",
    "top-right-pointed",
    "semi-circle",
    "mango",
    "inverted-mango",
  ];
  let className = "";
  const shapeIndex = shapes.indexOf(shape);
  if (shape && shapeIndex !== -1) {
    className = shapes[shapeIndex];
  } else {
    className = shapes[Math.floor(Math.random() * shapes.length)];
  }

  return className;
};

/**
 *
 * @param { source } props image source
 * @returns rendered Image component
 */
const Image = ({ source }) => (
  <div className="image-container">
    <div className="image-wrapper">
      <img src={source} className={getImageClassName()} draggable={false} />
    </div>
  </div>
);

/**
 *
 * @param { vehicle } props vehicle item
 * @returns VehicleCard component
 */
const VehicleCard = ({ vehicle }) => (
  <div className="width-25 float-left vehicle-card-item">
    <div className="vehicle-card">
      <Image source={vehicle.image ? vehicle.image : vehicle.images[0]} />
      <div className="title">{vehicle.name}</div>
      <div className="subtitle">
        {vehicle.manufacturer.name
          ? vehicle.manufacturer.name
          : vehicle.manufacturer}
      </div>
    </div>
  </div>
);

function App() {
  const [vehicles, setVehicles] = useState([]);
  const getVehicles = async () => {
    const response = await http.get("vehicles");
    setVehicles(response);
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div className="App">
      {vehicles.map((vehicle) => (
        <VehicleCard vehicle={vehicle} />
      ))}
    </div>
  );
}

export default App;
