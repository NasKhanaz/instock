import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditWarehouseForm from "../../components/EditWarehouseForm/EditWarehouseForm";
import "./EditWarehouse.scss";

function AddWarehouse() {
  return (
    <div className="edit-warehouse-page">
      <header className="edit-warehouse-header">
        <img
          className="edit-warehouse-header__back-arrow"
          src={backArrow}
          alt="back arrow"
        />
        <h1 className="edit-warehouse-header__title">Edit Warehouse</h1>
      </header>
      <EditWarehouseForm />
    </div>
  );
}

export default AddWarehouse;
