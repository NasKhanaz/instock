
import "./WarehouseDetails.scss";
import "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory.scss"
import WarehouseDetailsHeader from "../../components/WarehouseDetailsHeader/WarehouseDetailsHeader";
import WarehouseDetailsInventory from "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WarehouseDetails() {

  const [warehouseInventory, setWarehouseInventory] = useState(null);
  const { warehouseId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}/inventories`)
      .then((response) => {
        if (response.status === 200) {
          setWarehouseInventory(response.data);
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  }, [warehouseId]); 
  
  if (!warehouseInventory) {
    return <h2>Loading...</h2>
  }

  return (
  <>
    <main className="details-page">
      <WarehouseDetailsHeader />
        <WarehouseDetailsInventory warehouseArray={warehouseInventory} />
    </main>
  </>
  );
}

export default WarehouseDetails;
