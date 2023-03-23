import { useState } from "react";
import WarehouseFormField from "../WarehouseFormField/WarehouseFormField";
import "./ContactDetailsFormSection.scss";

function ContactDetailsFormSection() {
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="contact-details-section">
      <h1 className="contact-details-section__title">Contact Details</h1>
      <WarehouseFormField
        labelText={"Contact Name"}
        state={contactName}
        setState={setContactName}
      />
      <WarehouseFormField
        labelText={"Position"}
        state={position}
        setState={setPosition}
      />
      <WarehouseFormField
        labelText={"Phone Number"}
        state={phoneNumber}
        setState={setPhoneNumber}
      />
      <WarehouseFormField
        labelText={"Email"}
        state={email}
        setState={setEmail}
        extraInputClassName={"form-field-input--last"}
      />
    </section>
  );
}

export default ContactDetailsFormSection;
