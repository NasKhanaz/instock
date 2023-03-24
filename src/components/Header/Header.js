import "./Header.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location);

  if (
    location === "/" ||
    location === "/warehouses/add" ||
    location === "/warehouses/:warehouseId" ||
    location === "/warehouses/:warehouseId/edit"
  ) {
  }

  return (
    <div className="mainHeader">
      <Link to="/" className="mainHeader__logo--link">
        <img src={InStockLogo} className="mainHeader__logo" alt="InStockLogo" />
      </Link>
      <div className="mainHeader__container">
        <Link to="/">
          <button className="mainHeader__container__button--active">
            Warehouses
          </button>
        </Link>
        <Link to="/inventory">
          <button className="mainHeader__container__button">Inventory</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
