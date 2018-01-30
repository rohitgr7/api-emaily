import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import { submitSurvey } from './../../actions/survey';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm our entries</h5>
      {reviewFields}
      <button className="btn btn-warning" onClick={onCancel}>
        Back
      </button>
      <button
        className="btn btn-success float-right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey &nbsp; <i className="fa fa-envelope" />
      </button>
    </div>
  );
};

const mapStateToProps = ({ form: { surveyForm } }) => {
  return {
    formValues: surveyForm.values
  };
};

export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyFormReview)
);
