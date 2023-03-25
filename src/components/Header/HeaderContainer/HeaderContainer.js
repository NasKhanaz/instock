import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
export default function HeaderContainer() {
  const location = useLocation();
  const [isWarehouse, setIsWarehouse] = useState(true);
  const [isInventory, setIsInventory] = useState(false);
  console.log(location);

  useEffect(() => {
    if (
      location === "/" ||
      location === "/warehouses/add" ||
      location === "/warehouses/:warehouseId" ||
      location === "/warehouses/:warehouseId/edit"
    ) {
      setIsWarehouse(true);
      setIsInventory(false);
      console.log("is warehouse = " + isWarehouse);
      console.log("is inventory = " + isInventory);
    }
    if (
      location === "/inventory" ||
      location === "/inventory/add" ||
      location === "/inventory/:inventoryId" ||
      location === "/inventory/:inventoryId/edit"
    ) {
      setIsWarehouse(false);
      setIsInventory(true);
      console.log("is warehouse = " + isWarehouse);
      console.log("is inventory = " + isInventory);
    }
  }, [location]);

  return <HeaderButtons isWarehouse={isWarehouse} isInventory={isInventory} />;
}
