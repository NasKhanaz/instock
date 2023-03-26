import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./InventoryItemDescription.scss";

function InventoryItemDescription() {
  
    const [inventoryItemDetails, setInventoryItemDetails] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:8080/inventory/${itemId}`)
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                console.log(response);
                setInventoryItemDetails(response.data);
            }
            })
            .catch((error) => {
                return <h2>{error.message}</h2>;
            });
    }, [itemId]); 
  
  if (!inventoryItemDetails) {
    return <h2>Loading...</h2>
  }

  return (
    <>
    <header className="header">
        <div className="header__left-container">
          <img
            className="header__arrow"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="header__item-name">
            {inventoryItemDetails.item_name}
          </h1>
        </div>
        <button className="header__button--mobile"></button>
        <button className="header__button">Edit</button>
      </header>
    <main> 
        <div className="inventory__list">
            <div className="inventory__top-box">
                <div className="inventory__description-container">
                    <h2 className="inventory__item-description">ITEM DESCRIPTION:</h2>
                    <p className="inventory__text-description">{inventoryItemDetails.description}</p>
                </div>
                <div className="inventory__cat-container">
                    <h2 className="inventory__cat">CATEGORY:</h2>
                    <p className="inventory__cat-render">{inventoryItemDetails.category}</p>
                </div>
            </div>
            <div className="inventory__bottom-box">
                <div className="inventory__stat-container">
                    <h2 className="inventory__stat">STATUS:</h2>
                    <div className={inventoryItemDetails.status === "In Stock" ? "inventory__status-tag--in" : "inventory__status-tag--out"}>{inventoryItemDetails.status}</div>
                </div>
                 <div className="inventory__quantity-container">
                    <h2 className="inventory__quantity">QUANTITY:</h2>
                    <p className="inventory__quantity-count">{inventoryItemDetails.quantity}</p>
                </div>
                <div className="inventory__ware-container">
                    <h2 className="inventory__ware">WAREHOUSE:</h2>
                    <p className="inventory__ware-render">{inventoryItemDetails.warehouse_name}</p>
                </div>
            </div>
        </div>
    </main>
    </>
  );
}

export default InventoryItemDescription;