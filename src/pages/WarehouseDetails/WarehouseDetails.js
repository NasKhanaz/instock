
import "./WarehouseDetails.scss";
import "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory.scss"
import WarehouseDetailsHeader from "../../components/WarehouseDetailsHeader/WarehouseDetailsHeader";
import WarehouseDetailsInventory from "../../components/WarehouseDetailsInventory/WarehouseDetailsInventory";
import axios from "axios";
import { useState, useEffect } from "react";

function WarehouseDetails() {

  const [warehouseInventory, setWarehouseInventory] = useState(null);
  const { warehouseId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}`)
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
    <header className="details-page">
      <WarehouseDetailsHeader />
    </header>
    <WarehouseDetailsInventory  />
  </>
  );
}

export default WarehouseDetails;
