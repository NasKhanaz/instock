import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ContactDetailsFormSection from "../ContactDetailsFormSection/ContactDetailsFormSection";
import FormCTAButton from "../FormCTAButton/FormCTAButton";
import WarehouseDetailsFormSection from "../WarehouseDetailsFormSection/WarehouseDetailsFormSection";
import "./EditWarehouseForm.scss";

function EditWarehouseForm() {
  const navigate = useNavigate();

  // Warehouse Details States
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [validWarehouseName, setValidWarehouseName] = useState(false);
  const [validAddress, setValidAddress] = useState(false);
  const [validCity, setValidCity] = useState(false);
  const [validCountry, setValidCountry] = useState(false);

  // Contact Details States
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [validContactName, setValidContactName] = useState(false);
  const [validPosition, setValidPosition] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  // Determine when form submission is successful in order to toggle sucess message
  const [formSubmissionSucessful, setFormSubmissionSucessful] = useState(false);

  function handleClick() {
    navigate(-1); // Navigates the user to the previous page
  }

  const validateForm = () => {
    // Check warehouse details form fields
    !warehouseName
      ? setValidWarehouseName("error")
      : setValidWarehouseName(true);
    !streetAddress ? setValidAddress("error") : setValidAddress(true);
    !city ? setValidCity("error") : setValidCity(true);
    !country ? setValidCountry("error") : setValidCountry(true);

    // Check contact details form fields
    !contactName ? setValidContactName("error") : setValidContactName(true);
    !position ? setValidPosition("error") : setValidPosition(true);

    // Use a regex expression to check for desired phone number format:
    // Must begin with a + followed by an areacode (1 or more digits) followed by a space
    // Must then be 3 digits contained in () followed by a space
    // Must then be 3 digits followed by a hyphen
    // Must end with 4 digits
    const phoneRegexValidation = /^(\+\d+)\s\(\d{3}\)\s\d{3}-\d{4}$/;
    !phoneNumber.match(phoneRegexValidation)
      ? setValidPhoneNumber("error")
      : setValidPhoneNumber(true);

    // Use a regex expression to check for a valid email:
    // Must have 1 or more alphanumeric characters (allows for a dot or hyphen as well) before an @ sign
    // Must then 1 or more alphanumeric characters before (not allowing for a dot or hyphen) before a .
    // Must be followed by a domain which only has letters and is between 2-10 characters long
    const emailRegexValidation =
      /^([a-zA-Z\d.-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,10})$/;
    !email.match(emailRegexValidation)
      ? setValidEmail("error")
      : setValidEmail(true);

    // Check that every field is valid
    if (
      validWarehouseName === true &&
      validAddress === true &&
      validCity === true &&
      validCountry === true &&
      validContactName === true &&
      validPosition === true &&
      validPhoneNumber === true &&
      validEmail === true
    ) {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:8080/warehouses", {
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
    <>
      <form className="edit-warehouse-form" onSubmit={handleSubmit}>
        <div className="edit-warehouse-form__input-sections">
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
        <div className="edit-warehouse-form__buttons-container">
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
            ? "edit-warehouse-form__message--success"
            : "edit-warehouse-form__message"
        }
      >
        The warehouse has successfully been edited! Please wait, returning to
        warehouses page...
      </h2>
    </>
  );
}

export default EditWarehouseForm;
