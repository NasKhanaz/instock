import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
export default function HeaderContainer() {
  const path = useLocation();
  const location = path.pathname;
  const [isWarehouse, setIsWarehouse] = useState(true);
  const [isInventory, setIsInventory] = useState(false);

  useEffect(() => {
    if (
      location === "/" ||
      location === "/warehouses/add" ||
      location === "/warehouses/:warehouseId" ||
      location === "/warehouses/:warehouseId/edit"
    ) {
      setIsWarehouse(true);
      setIsInventory(false);
    }
    if (
      location === "/inventory" ||
      location === "/inventory/add" ||
      location === "/inventory/:inventoryId" ||
      location === "/inventory/:inventoryId/edit"
    ) {
      setIsWarehouse(false);
      setIsInventory(true);
    }
  }, [location]);

  return <HeaderButtons isWarehouse={isWarehouse} isInventory={isInventory} />;
}
