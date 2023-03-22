import "./WarehouseFormField.scss";

function WarehouseFormField({ extraInputClassName, labelText, state, setState }) {

  const handleChange = (event) => {
  setState(event.target.value);
  };

  return (
    <div className="form-field-container">
      <label className="form-field-label" htmlFor={labelText}>
        {labelText}
      </label>
      <input
        className={`form-field-input ${extraInputClassName}`}
        type="text"
        id={labelText}
        name={labelText}
        placeholder={labelText}
        onChange={handleChange}
        value={state}
      ></input>
    </div>
  );
}

export default WarehouseFormField;
