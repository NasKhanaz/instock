import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import AddWarehouseForm from "../../components/AddWarehouseForm/AddWarehouseForm";
import "./AddWarehouse.scss";

function AddWarehouse() {


  return (
    <div className="add-warehouse-page">
      <header className="new-warehouse-header">
        <img
          className="new-warehouse-header__back-arrow"
          src={backArrow}
          alt="back arrow"
        />
        <h1 className="new-warehouse-header__title">Add New Warehouse</h1>
      </header>
      <AddWarehouseForm />
    </div>
  );
}

export default AddWarehouse;
