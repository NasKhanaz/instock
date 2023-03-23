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
        extraInputClassName={
          props.validContactName ? "" : "form-field-input--error"
        }
      />
      <WarehouseFormField
        labelText={"Position"}
        state={props.position}
        setState={props.setPosition}
        extraInputClassName={
          props.validPosition ? "" : "form-field-input--error"
        }
      />
      <WarehouseFormField
        labelText={props.validPhoneNumber ? "Phone Number" : "Phone Number: Format of +1 (123) 456-7890"}
        state={props.phoneNumber}
        setState={props.setPhoneNumber}
        extraInputClassName={
          props.validPhoneNumber
            ? ""
            : "form-field-input--error"
        }
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
