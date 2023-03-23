import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import ContactDetailsFormSection from "../../components/ContactDetailsFormSection/ContactDetailsFormSection";
import FormCTAButton from "../../components/FormCTAButton/FormCTAButton";
import WarehouseDetailsFormSection from "../../components/WarehouseDetailsFormSection/WarehouseDetailsFormSection";
import "./AddWarehouse.scss";

function AddWarehouse() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1); // Navigates the user to the previous page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
      <form className="new-warehouse-form" onSubmit={handleSubmit}>
        <div className="new-warehouse-form__input-sections">
          <WarehouseDetailsFormSection />
          <ContactDetailsFormSection />
        </div>
        <div className="new-warehouse-form__buttons-container">
          <FormCTAButton
            type={"button"}
            className={"form-cta-button--secondary"}
            buttonText={"Cancel"}
            action={handleClick}
          />
          <FormCTAButton
            type={"submit"}
            className={"form-cta-button--primary"}
            buttonText={"+ Add Warehouse"}
          />
        </div>
      </form>
    </div>
  );
}

export default AddWarehouse;
