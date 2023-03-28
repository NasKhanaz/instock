import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import AddInventoryForm from "../../components/AddInventoryForm/AddInventoryForm";
import "./AddInventoryItem.scss";

function AddInventoryItem() {
  return (
    <div className="add-inventory-page">
      <header className="new-inventory-header">
        <img
          className="new-inventory-header__back-arrow"
          src={backArrow}
          alt="back arrow"
        />
        <h1 className="new-inventory-header__title">Add New Inventory Item</h1>
      </header>
      <AddInventoryForm />
    </div>
  );
}

export default AddInventoryItem;
