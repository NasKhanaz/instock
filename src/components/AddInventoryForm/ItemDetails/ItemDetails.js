import ItemFormText from "../ItemFormText/ItemFormText";
import ItemFormTextArea from "../ItemFormTextArea/ItemFormTextArea";
import "./ItemDetails.scss";

function ItemDetails(props) {
  return (
    <section className="contact-details-section">
      <h1 className="contact-details-section__title">Item Details</h1>
      <ItemFormText
        labelText={"Item Name"}
        state={props.itemName}
        setState={props.setItemName}
        extraInputClassName={
          props.validItemName === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validItemName === "error" ? "form-field-error--show" : ""
        }
      />
      <ItemFormTextArea
        labelText={"Description"}
        state={props.Description}
        setState={props.setDescription}
        extraInputClassName={
          props.validDescription === "error" ? "form-field-input--error" : ""
        }
        errorMessageClassName={
          props.validDescription === "error" ? "form-field-error--show" : ""
        }
      />
    </section>
  );
}

export default ItemDetails;
