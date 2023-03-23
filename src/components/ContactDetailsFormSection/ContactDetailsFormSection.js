import { useState } from "react";
import WarehouseFormField from "../WarehouseFormField/WarehouseFormField";
import "./ContactDetailsFormSection.scss";

function ContactDetailsFormSection(props) {

  return (
    <section className="contact-details-section">
      <h1 className="contact-details-section__title">Contact Details</h1>
      <WarehouseFormField
        labelText={"Contact Name"}
        state={props.contactName}
        setState={props.setContactName}
      />
      <WarehouseFormField
        labelText={"Position"}
        state={props.position}
        setState={props.setPosition}
      />
      <WarehouseFormField
        labelText={"Phone Number"}
        state={props.phoneNumber}
        setState={props.setPhoneNumber}
      />
      <WarehouseFormField
        labelText={"Email"}
        state={props.email}
        setState={props.setEmail}
        extraInputClassName={"form-field-input--last"}
      />
    </section>
  );
}

export default ContactDetailsFormSection;
