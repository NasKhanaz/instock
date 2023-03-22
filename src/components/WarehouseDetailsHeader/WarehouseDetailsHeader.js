import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./WarehouseDetailsHeader.scss";

function WarehouseDetailsHeader() {
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const { warehouseId } = useParams();

  // Make a GET request to obtain the details for a specific warehouse based on its ID
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then((response) => {
        if (response.status === 200) {
          setWarehouseDetails(response.data);
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  }, [warehouseId]); // Use warehouseId for dependency so this request is made if the warehouseId changes
  
  if (!warehouseDetails) {
    return <h1>Warehouse Details Loading...</h1>
  }

  return (
    <>
      <header className="header">
        <div className="header__left-container">
          <img
            className="header__back-arrow"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="header__warehouse-name">
            {warehouseDetails.warehouse_name}
          </h1>
        </div>
          <button className="header__edit-button--mobile"></button>
      </header>
      <main className="details">
        <div className="details__address-container">
          <h2 className="details__heading">WAREHOUSE ADDRESS:</h2>
          <p className="details__info">{`${warehouseDetails.address}, ${warehouseDetails.city}, ${warehouseDetails.country}`}</p>
        </div>
        <div className="details__contact-container">
          <div className="details__contact-name-container">
            <h2 className="details__heading">CONTACT NAME:</h2>
            <p className="details__info">{warehouseDetails.contact_name}</p>
            <p className="details__info">{warehouseDetails.contact_position}</p>
          </div>
          <div className="details__contact-info-container">
            <h2 className="details__heading">CONTACT INFORMATION:</h2>
            <p className="details__info">{warehouseDetails.contact_phone}</p>
            <p className="details__info">{warehouseDetails.contact_email}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetailsHeader;