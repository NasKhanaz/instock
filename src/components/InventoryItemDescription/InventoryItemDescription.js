import { Link } from "react-router-dom";
import "./InventoryItemDescription.scss";


function InventoryItemDescription ({ description, warehouse, category, status, quantity }) {
  
  return (

    <li> 
        <div className="inventory__listcard">
            <div className="inventory__left-box">
                <div className="inventory__item-container">
                    <h2 className="inventory__item">INVENTORY ITEM</h2>
                    <div className="inventory__item-link">
                        <div className="inventory__text-link">{description}</div>
                    </div>
                </div>
                <div className="inventory__category-container">
                    <h2 className="inventory__category">CATEGORY</h2>
                    <p className="inventory__category-render">{category}</p>
                </div>
            </div>
            <div className="inventory__middle-box">
                <div className="inventory__status-container">
                    <h2 className="inventory__status">STATUS</h2>
                    <div className={status === "In Stock" ? "inventory__status-tag--in" : "inventory__status-tag--out"}>{status}</div>
                </div>
                 <div className="inventory__qty-container">
                    <h2 className="inventory__qty">QTY</h2>
                    <p className="inventory__qty-count">{quantity}</p>
                </div>
                <div className="inventory__warehouse-container">
                    <h2 className="inventory__warehouse">WAREHOUSE</h2>
                    <p className="inventory__warehouse-render">{warehouse}</p>
                </div>
            </div>
        </div>
    </li>
  );
}

export default InventoryItemDescription;