import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./InventoryListCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"; 
import editIcon from "../../assets/Icons/edit-24px.svg"; 
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg"; 
import sortDefaultIcon from "../../assets/Icons/sort-24px.svg";

function InventoryListCard(supply) {
  const [inventoryDetails, setInventoryDetails] = useState(null);
  const { inventoryId } = useParams();

  useEffect(() => {
    axios
       .get(`http://localhost:8080/inventory/${inventoryId}`)
       .then((response) => {
         if (response.status === 200) {
            setInventoryDetails(response.data);
         }
         })
        .catch((error) => {
            return <h2>{error.message}</h2>;
        });
  }, [inventoryId]); 
  
  if (!inventoryDetails) {
    return <h2>Loading...</h2>
  }
  
  return (

    <main> 
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
                <h2 className="inventory__selector">WAREHOUSE</h2>
                <img
                className="inventory__img-selector"
                src={sortDefaultIcon}
                alt="sort default icon"
                />
            </div>
            <div className="inventory__toggle">
                <h2 className="inventory__selector">ACTIONS</h2>
                <img
                className="inventory__img-selector"
                src={sortDefaultIcon}
                alt="sort default icon"
                />
            </div>
        </div>
        <div className="inventory__listcard">
            <div className="inventory__left-box">
                <div className="inventory__item-container">
                    <h2 className="inventory__item">INVENTORY ITEM</h2>
                    <div className="inventory__item-link">
                        <Link to={`/inventory/${supply.id}`}><div className="inventory__text-link">{"test"}</div></Link>
                        <img 
                        className="inventory__img-chevron"
                        src={chevronIcon}
                        alt="chevron icon"
                        />
                    </div>
                </div>
                <div className="inventory__category-container">
                    <h2 className="inventory__category">CATEGORY</h2>
                    <p className="inventory__category-render">{supply.category}</p>
                </div>
            </div>
            <div className="inventory__middle-box">
                <div className="inventory__status-container">
                    <h2 className="inventory__status">STATUS</h2>
                    <div className="inventory__status-tag">{supply.status}</div>
                </div>
                 <div className="inventory__qty-container">
                    <h2 className="inventory__qty">QTY</h2>
                    <p className="inventory__qty-count">{supply.quantity}</p>
                </div>
                <div className="inventory__warehouse-container">
                    <h2 className="inventory__warehouse">WAREHOUSE</h2>
                    <p className="inventory__warehouse-render">{supply.warehouse_id}</p>
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