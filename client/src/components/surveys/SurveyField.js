import React from 'react';

const SurveyField = ({
  input,
  label,
  placeholder,
  meta: { error, touched }
}) => {
  let inputClass = 'form-control';
  inputClass += touched && error ? ' is-invalid' : '';

  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...input} className={inputClass} placeholder={placeholder} />
      <div className="invalid-feedback">{touched && error}</div>
    </div>
  );
};

export default SurveyField;
