import "./WarehouseDetailsInventory.scss" 
import sortDefaultIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseListCard from "../WarehouseListCard/WarehouseListCard";
import { Link } from "react-router-dom";

function WarehouseDetailsInventory ({ warehouseArray }) {

  return (
    <>
      <div className="inventory__category-selector--wider">
        <div className="inventory__toggle">
            <h2 className="inventory__selector">INVENTORY ITEM</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">CATEGORY</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">STATUS</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">QTY</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">ACTIONS</h2>
        </div>
    </div>
    <div className="inventory__permutation">
        <ul className="inventory__outcome">
        {warehouseArray.map((item) => {
            return <WarehouseListCard key={item.id} id={item.id} name={item.item_name} category={item.category} status={item.status} quantity={item.quantity}/>
        })}
        </ul>
    </div>
    </>
  );
};

export default WarehouseDetailsInventory;