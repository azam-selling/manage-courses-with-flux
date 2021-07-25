import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  let dynamicClassName = "form-group";
  if (props.error.length > 0) {
    dynamicClassName += " has-error";
  }
  return (
    <div className={dynamicClassName}>
      <label>{props.label}</label>
      <input
        className="form-control"
        id={props.id}
        name={props.name}
        type="text"
        onChange={props.onChange}
        value={props.value}
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
