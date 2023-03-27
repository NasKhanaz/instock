import errorIcon from "../../../assets/Icons/error-24px.svg";
import "./ItemFormRadio.scss";

function ItemFormRadio({
  errorMessageClassName,
  extraInputClassName,
  labelText,
  state,
  setState,
}) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="form-field-container">
      <label className="form-field-label" htmlFor={labelText}>
        {labelText}
      </label>
      <div>
        <label className="form-field-radio-container">
          <input
            className={`form-field-radio ${extraInputClassName}`}
            type="radio"
            id={labelText}
            name={labelText}
            onChange={handleChange}
            value={state}
          />
          <h5>In Stock</h5>
        </label>
        <label className="form-field-radio-container">
          <input
            className={`form-field-radio ${extraInputClassName}`}
            type="radio"
            id={labelText}
            name={labelText}
            onChange={handleChange}
            value={state}
          />
          <h5>Out of Stock</h5>
        </label>
      </div>

      <div className={`form-field-error ${errorMessageClassName}`}>
        <img
          className="form-field-error__icon"
          src={errorIcon}
          alt="error icon"
        />
        <h3 className="form-field-error__message">This field is required</h3>
      </div>
    </div>
  );
}

export default ItemFormRadio;
