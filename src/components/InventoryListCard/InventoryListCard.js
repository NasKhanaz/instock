import { Link } from "react-router-dom";
import "./InventoryListCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"; 
import editIcon from "../../assets/Icons/edit-24px.svg"; 
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg"; 


function InventoryListCard({ id, name, warehouse, category, status, quantity}) {
  
  return (

    <main> 
        <div className="inventory__listcard">
            <div className="inventory__left-box">
                <div className="inventory__item-container">
                    <h2 className="inventory__item">INVENTORY ITEM</h2>
                    <div className="inventory__item-link">
                        <div className="inventory__text-link">{"test-item"}</div>
                        <img 
                        className="inventory__img-chevron"
                        src={chevronIcon}
                        alt="chevron icon"
                        />
                    </div>
                </div>
                <div className="inventory__category-container">
                    <h2 className="inventory__category">CATEGORY</h2>
                    <p className="inventory__category-render">{"test-category"}</p>
                </div>
            </div>
            <div className="inventory__middle-box">
                <div className="inventory__status-container">
                    <h2 className="inventory__status">STATUS</h2>
                    <div className="inventory__status-tag">{"test-status"}</div>
                </div>
                 <div className="inventory__qty-container">
                    <h2 className="inventory__qty">QTY</h2>
                    <p className="inventory__qty-count">{"test-qty"}</p>
                </div>
                <div className="inventory__warehouse-container">
                    <h2 className="inventory__warehouse">WAREHOUSE</h2>
                    <p className="inventory__warehouse-render">{"test-warehouse"}</p>
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