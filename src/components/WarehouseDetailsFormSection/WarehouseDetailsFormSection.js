import { useState } from "react";
import WarehouseFormField from "../WarehouseFormField/WarehouseFormField";
import "./WarehouseDetailsFormSection.scss";

function WarehouseDetailsFormSection(props) {

  return (
    <section className="warehouse-details-section">
      <h1 className="warehouse-details-section__title">Warehouse Details</h1>
      <WarehouseFormField
        labelText={"Warehouse Name"}
        state={props.warehouseName}
        setState={props.setWarehouseName}
        extraInputClassName={
          props.validWarehouseName ? "" : "form-field-input--error"
        }
      />
      <WarehouseFormField
        labelText={"Street Address"}
        state={props.streetAddress}
        setState={props.setStreetAddress}
        extraInputClassName={
          props.validAddress ? "" : "form-field-input--error"
        }
      />
      <WarehouseFormField
        labelText={"City"}
        state={props.city}
        setState={props.setCity}
        extraInputClassName={props.validCity ? "" : "form-field-input--error"}
      />
      <WarehouseFormField
        labelText={"Country"}
        state={props.country}
        setState={props.setCountry}
        extraInputClassName={`form-field-input--last ${
          props.validCity ? "" : "form-field-input--error"
        }`}
      />
    </section>
  );
}

export default WarehouseDetailsFormSection;
