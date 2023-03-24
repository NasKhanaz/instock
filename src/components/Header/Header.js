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
    <header className="header">
      <Link to="/" className="header__logo--link">
        <img src={InStockLogo} className="header__logo" alt="InStockLogo" />
      </Link>
      <div className="header__container">
        <Link to="/">
          <button className="header__container__button--active">
            Warehouses
          </button>
        </Link>
        <Link to="/inventory">
          <button className="header__container__button">Inventory</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
