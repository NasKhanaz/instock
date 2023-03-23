import "./FormCTAButton.scss";

function FormCTAButton({ className, buttonText }) {
  return (
      <button className={`form-cta-button ${className}`}>{buttonText}</button>
  );
}

export default FormCTAButton;
