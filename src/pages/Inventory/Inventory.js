import "./Inventory.scss"
import "../../components/InventoryListHeader/InventoryListHeader.scss"
import "../../components/InventoryList/InventoryList.scss"
import InventoryListHeader from "../../components/InventoryListHeader/InventoryListHeader" 
import InventoryList from "../../components/InventoryList/InventoryList";
import axios from "axios";
import { useState, useEffect } from "react";

function Inventory() {

  const [inventoryDetails, setInventoryDetails] = useState(null);

  useEffect(() => {
    axios
       .get("http://localhost:8080/inventory")
       .then((response) => {
         if (response.status === 200) {
            console.log(response);
            setInventoryDetails(response.data);
         }
         })
        .catch((error) => {
            return <h2>{error.message}</h2>;
        });
  }, []); 
  
  if (!inventoryDetails) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <InventoryListHeader/>
      <InventoryList inventoryArray={inventoryDetails}/>
    </>
  );
}

export default Inventory;











