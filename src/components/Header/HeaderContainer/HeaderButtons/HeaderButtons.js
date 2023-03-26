import React from "react";
import { Link } from "react-router-dom";
import "./HeaderButtons.scss";

export default function HeaderButtons({ isWarehouse, isInventory }) {
  console.log("inventory " + isInventory);
  console.log("warehouse " + isWarehouse);
  if (isWarehouse) {
    return (
      <div className="HBContainer">
        <Link to="/">
          <button className="HBContainer__button--active">Warehouses</button>
        </Link>
        <Link to="/inventory">
          <button className="HBContainer__button">Inventory</button>
        </Link>
      </div>
    );
  } else if (isInventory) {
    return (
      <div className="HBContainer">
        <Link to="/">
          <button className="HBContainer__button">Warehouses</button>
        </Link>
        <Link to="/inventory">
          <button className="HBContainer__button--active">Inventory</button>
        </Link>
      </div>
    );
  } else
    return (
      <div className="HBContainercontainer">
        <Link to="/">
          <button className="HBContainer__button">Warehouses</button>
        </Link>
        <Link to="/inventory">
          <button className="HBContainer__button--active">Inventory</button>
        </Link>
      </div>
    );
}
