import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const [validForm, setValidForm] = useState(false);

  // Determine when form submission is successful in order to toggle sucess message
  const [formSubmissionSucessful, setFormSubmissionSucessful] = useState(false);


  function handleClick() {
    navigate(-1); // Navigates the user to the previous page
  }

  const validateForm = () => {
    // Check warehouse details form fields
    !warehouseName ? setValidWarehouseName(false) : setValidWarehouseName(true);
    !streetAddress ? setValidAddress(false) : setValidAddress(true);
    !city ? setValidCity(false) : setValidCity(true);
    !country ? setValidCountry(false) : setValidCountry(true);

    // Check contact details form fields
    !contactName ? setValidContactName(false) : setValidContactName(true);
    !position ? setValidPosition(false) : setValidPosition(true);

    // Use a regex expression to check for desired phone number format:
    // Must begin with a + followed by an areacode (1 or more digits) followed by a space
    // Must then be 3 digits contained in () followed by a space
    // Must then be 3 digits followed by a hyphen
    // Must end with 4 digits
    const phoneRegexValidation = /^(\+\d+)\s\(\d{3}\)\s\d{3}-\d{4}$/;
    !phoneNumber.match(phoneRegexValidation)
      ? setValidPhoneNumber(false)
      : setValidPhoneNumber(true);

    // Use a regex expression to check for a valid email:
    // Must have 1 or more alphanumeric characters (allows for a dot or hyphen as well) before an @ sign
    // Must then 1 or more alphanumeric characters before (not allowing for a dot or hyphen) before a .
    // Must be followed by a domain which only has letters and is between 2-10 characters long
    const emailRegexValidation =
      /^([a-zA-Z\d.-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,10})$/;
    !email.match(emailRegexValidation)
      ? setValidEmail(false)
      : setValidEmail(true);

    // Check that every field is valid
    if (validWarehouseName && validAddress && validCity && validCountry && validContactName && validPosition && validPhoneNumber && validEmail) {
        setValidForm(true);
      }
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    if (validForm) {
      axios.post("http://localhost:8080/warehouses", {
        warehouse_name: warehouseName,
        address: streetAddress,
        city,
        country,
        contact_name: contactName,
        contact_position: position,
        contact_phone: phoneNumber,
        contact_email: email,
      })
      .then((response) => {
        if (response.status === 201) {
          setFormSubmissionSucessful(true);
          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
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
      <h2
        className={
          formSubmissionSucessful
            ? "new-warehouse-form__message--success"
            : "new-warehouse-form__message"
        }
      >The new warehouse has successfully been added! Please wait, returning to warehoues page...</h2>
    </div>
  );
}

export default AddWarehouse;
