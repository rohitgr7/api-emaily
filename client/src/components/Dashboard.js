import React from 'react';
import { Link } from 'react-router-dom';

import SurveyList from './surveys/SurveyList';

const Dashboard = () => (
  <div>
    <SurveyList />
    <div className="fixed-bottom mb-4 mr-4">
      <Link
        to="/surveys/new"
        className="btn btn-lg btn-danger float-right rounded-circle"
      >
        <i className="fa fa-plus" />
      </Link>
    </div>
  </div>
);

export default Dashboard;
