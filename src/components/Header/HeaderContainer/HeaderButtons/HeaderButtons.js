import React from "react";
import { Link } from "react-router-dom";
import "./HeaderButtons.scss";

export default function HeaderButtons({ isWarehouse, isInventory }) {

  return (
    <div className="header-buttons-container">
      <Link to="/warehouses">
        <button
          className={`header-buttons-container__button ${isWarehouse} ? header-buttons-container__button--active : ""`}
        >
          Warehouses
        </button>
      </Link>
      <Link to="/inventory">
        <button
          className={`header-buttons-container__button ${isInventory} ? header-buttons-container__button--active : ""`}
        >
          Inventory
        </button>
      </Link>
    </div>
  );
}
