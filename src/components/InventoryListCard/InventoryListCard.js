import { Link } from "react-router-dom";
import "./InventoryListCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"; 
import editIcon from "../../assets/Icons/edit-24px.svg"; 
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg"; 
import classnames from "classnames";


function InventoryListCard({ name, warehouse, category, status, quantity }) {
  
    const statusClass = classnames("inventory__status-tag", {
    "inventory__status-tag--in": status === "In Stock",
    "inventory__status-tag--out": status === "Out of Stock",
  });  


  return (

    <main> 
        <div className="inventory__listcard">
            <div className="inventory__left-box">
                <div className="inventory__item-container">
                    <h2 className="inventory__item">INVENTORY ITEM</h2>
                    <div className="inventory__item-link">
                        <div className="inventory__text-link">{name}</div>
                        <img 
                        className="inventory__img-chevron"
                        src={chevronIcon}
                        alt="chevron icon"
                        />
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
                    <div className={statusClass}>{status}</div>
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
            <div className="inventory__right-box">
                <img 
                className="inventory__delete"
                src={deleteIcon}
                alt="delete feature"
                />
                <img 
                className="inventory__edit"
                src={editIcon}
                alt="delete feature"
                />
            </div>
        </div>
    </main>
  );
}

export default InventoryListCard;