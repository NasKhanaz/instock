import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./InventoryListCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"; 
import editIcon from "../../assets/Icons/edit-24px.svg"; 

function InventoryListCard() {
  const [inventoryDetails, setinventoryDetails] = useState(null);
  const { inventoryId } = useParams();


  return (

    <main> 
        <div className="inventory__category-selector--wider"></div>
        <div className="inventory__divider"></div>
        <div className="inventory__list">
            <div className="inventory__left-box">
                <div className="inventory__item-container">
                    <h2 className="inventory__item">INVENTORY ITEM</h2>
                    <div className="inventory__text-link">
                        <div className="inventory__text-link--mobile">{}</div>
                        <div className="inventory__text">{}</div>
                        <img className="inventory__img-chevron"/>
                    </div>
                </div>
                <div className="inventory__category-container">
                    <h2 className="inventory__category">CATEGORY</h2>
                    <p className="inventory__category-render">{}</p>
                </div>
            </div>
            <div className="inventory__middle-box">
                <div className="inventory__status-container">
                    <h2 className="inventory__status">STATUS</h2>
                    <div className="inventory__status-tag--mobile"></div>
                    <div className="inventory__status-tag"></div>
                </div>
                 <div className="inventory__qty-container">
                    <h2 className="inventory__qty">QTY</h2>
                    <p className="inventory__qty-count">{}</p>
                </div>
                <div className="inventory__warehouse-container">
                    <h2 className="inventory__warehouse">WAREHOUSE</h2>
                    <p className="inventory__warehouse-render">{}</p>
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