import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './../actions/auth';

import Dashboard from './../components/Dashboard';
import Header from './../components/Header';
import Landing from './../components/Landing';
import NotFound from './../components/NotFound';
import SurveyNew from './../components/SurveyNew';

class AppRouter extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" component={Landing} exact />
              <Route path="/surveys" component={Dashboard} exact />
              <Route path="/surveys/new" component={SurveyNew} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(AppRouter);
