import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import ContactDetailsFormSection from "../../components/ContactDetailsFormSection/ContactDetailsFormSection";
import FormCTAButton from "../../components/FormCTAButton/FormCTAButton";
import WarehouseDetailsFormSection from "../../components/WarehouseDetailsFormSection/WarehouseDetailsFormSection";
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
      <form className="new-warehouse-form">
        <div className="new-warehouse-form__input-sections">
          <WarehouseDetailsFormSection />
          <ContactDetailsFormSection />
        </div>
        <div className="new-warehouse-form__buttons-container">
          <FormCTAButton
            className={"form-cta-button--secondary"}
            buttonText={"Cancel"}
          />
          <FormCTAButton
            className={"form-cta-button--primary"}
            buttonText={"+ Add Warehouse"}
          />
        </div>
      </form>
    </div>
  );
}

export default AddWarehouse;
