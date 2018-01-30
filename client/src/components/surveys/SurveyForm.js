import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from './../../utils/validateEmails';

import formFields from './formFields';

class SurveyForm extends Component {
  renderFields = () => {
    return formFields.map(({ name, label, placeholder }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          placeholder={placeholder}
        />
      );
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <br />
        <form
          className="needs-validation"
          onSubmit={handleSubmit(this.props.onSurveySubmit)}
          noValidate
        >
          {this.renderFields()}
          <Link to="/surveys" className="btn btn-danger">
            Cancel
          </Link>
          <button className="btn btn-primary float-right" type="submit">
            Next &nbsp; <i className="fa fa-check" />
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please provide a title';
  }

  if (!values.subject) {
    errors.subject = 'Please provide a subject';
  }

  if (!values.body) {
    errors.body = 'Please provide a body';
  }
  if (!values.recipients) {
    errors.recipients = 'Please provide an email';
  }

  if (values.recipients) {
    errors.recipients = validateEmails(values.recipients);
  }

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
