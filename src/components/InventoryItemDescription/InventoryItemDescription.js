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
        <div className="inventory__listcard">
            <div className="inventory__left-box">
                <div className="inventory__item-container">
                    <h2 className="inventory__item">ITEM DESCRIPTION</h2>
                    <p className="inventory__text-link">{inventoryItemDetails.description}</p>
                </div>
                <div className="inventory__category-container">
                    <h2 className="inventory__category">CATEGORY</h2>
                    <p className="inventory__category-render">{inventoryItemDetails.category}</p>
                </div>
            </div>
            <div className="inventory__middle-box">
                <div className="inventory__status-container">
                    <h2 className="inventory__status">STATUS</h2>
                    <div className={inventoryItemDetails.status === "In Stock" ? "inventory__status-tag--in" : "inventory__status-tag--out"}>{inventoryItemDetails.status}</div>
                </div>
                 <div className="inventory__qty-container">
                    <h2 className="inventory__qty">QUANTITY</h2>
                    <p className="inventory__qty-count">{inventoryItemDetails.quantity}</p>
                </div>
                <div className="inventory__warehouse-container">
                    <h2 className="inventory__warehouse">WAREHOUSE</h2>
                    <p className="inventory__warehouse-render">{inventoryItemDetails.warehouse_name}</p>
                </div>
            </div>
        </div>
    </main>
    </>
  );
}

export default InventoryItemDescription;