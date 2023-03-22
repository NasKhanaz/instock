import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  
  return <h1>This is the Warehouse Details Header item.</h1>;
}

export default WarehouseDetailsHeader;