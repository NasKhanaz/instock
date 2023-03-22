import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses/add" element={<WarehouseAddPage />} />
        <Route
          path="/warehouses/:warehouseId"
          element={<WarehouseDetailsPage />}
        />
        <Route
          path="/warehouses/:warehouseId/edit"
          element={<WarehouseEditPage />}
        />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route
          path="/inventory/:itemId"
          element={<InventoryItemDetailsPage />}
        />
        <Route
          path="/inventory/:itemId/edit"
          element={<InventoryItemEditPage />}
        />
        <Route
          path="/inventory/add"
          element={<InventoryItemAddPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
