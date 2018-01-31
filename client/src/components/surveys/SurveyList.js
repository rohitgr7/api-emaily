import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from './../../actions/survey';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys = () => {
    return this.props.surveys.reverse().map(survey => (
      <div>
        <br />
        <div className="card">
          <div className="card-header text-center">
            <h4>{survey.title}</h4>
          </div>
          <div className="card-body">
            <h4 className="card-title">{survey.subject}</h4>
            <p className="card-text">{survey.body}</p>
          </div>
          <div className="card-footer text-muted">
            <a className="text-danger font-weight-bold">YES: {survey.yes}</a>
            <a className="ml-3 text-danger font-weight-bold">NO: {survey.no}</a>
            <p className="float-right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
