import "./Header.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";
import HeaderContainer from "./HeaderContainer/HeaderContainer";

function Header() {
  return (
    <div className="mainHeader">
      <Link to="/" className="mainHeader__logo--link">
        <img src={InStockLogo} className="mainHeader__logo" alt="InStockLogo" />
      </Link>
      <HeaderContainer />
    </div>
  );
}

export default Header;
