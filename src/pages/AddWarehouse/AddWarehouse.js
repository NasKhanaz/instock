import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import ContactDetailsFormSection from "../../components/ContactDetailsFormSection/ContactDetailsFormSection";
import FormCTAButton from "../../components/FormCTAButton/FormCTAButton";
import WarehouseDetailsFormSection from "../../components/WarehouseDetailsFormSection/WarehouseDetailsFormSection";
import "./AddWarehouse.scss";

function AddWarehouse() {
  const navigate = useNavigate();

  // Warehouse Details States
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [validWarehouseName, setValidWarehouseName] = useState(true);
  const [validAddress, setValidAddress] = useState(true);
  const [validCity, setValidCity] = useState(true);
  const [validCountry, setValidCountry] = useState(true);

  // Contact Details States
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [validContactName, setValidContactName] = useState(true);
  const [validPosition, setValidPosition] = useState(true);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [validEmail, setValidEmail] = useState(true);


  function handleClick() {
    navigate(-1); // Navigates the user to the previous page
  }

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
          <WarehouseDetailsFormSection
            warehouseName={warehouseName}
            setWarehouseName={setWarehouseName}
            streetAddress={streetAddress}
            setStreetAddress={setStreetAddress}
            city={city}
            setCity={setCity}
            country={country}
            setCountry={setCountry}
            validWarehouseName={validWarehouseName}
            validAddress={validAddress}
            validCity={validCity}
            validCountry={validCountry}
          />
          <ContactDetailsFormSection 
          contactName={contactName}
          setContactName={setContactName}
          position={position}
          setPosition={setPosition}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          validContactName={validContactName}
          validPosition={validPosition}
          validPhoneNumber={validPhoneNumber}
          validEmail={validEmail}
          />
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
