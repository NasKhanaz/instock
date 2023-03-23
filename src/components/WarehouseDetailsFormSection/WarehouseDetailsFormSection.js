import { useState } from "react";
import WarehouseFormField from "../WarehouseFormField/WarehouseFormField";
import "./WarehouseDetailsFormSection.scss";

function WarehouseDetailsFormSection() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <section className="warehouse-details-section">
      <h1 className="warehouse-details-section__title">Warehouse Details</h1>
      <WarehouseFormField
        labelText={"Warehouse Name"}
        state={warehouseName}
        setState={setWarehouseName}
      />
      <WarehouseFormField
        labelText={"Street Address"}
        state={streetAddress}
        setState={setStreetAddress}
      />
      <WarehouseFormField labelText={"City"} state={city} setState={setCity} />
      <WarehouseFormField
        labelText={"Country"}
        state={country}
        setState={setCountry}
        extraInputClassName={"form-field-input--last"}
      />
    </section>
  );
}

export default WarehouseDetailsFormSection;
