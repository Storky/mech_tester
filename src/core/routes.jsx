import React from 'react';
import PropTypes from 'prop-types'
import {
    Route, Switch, Redirect, withRouter
} from 'react-router-dom';
import UIKitPage from 'containers/UIKit/UIKitPage';
import TableMechsPage from 'containers/TableMechs';
import OptimisationPage from 'containers/Optimisation/OptimisationPage';
import TestRedux from 'containers/TestRedux';

export default <Switch>
    <Route path="/uikit" exact component={UIKitPage} />
    <Route path="/mechs" exact component={TableMechsPage} />
    <Route path="/opt" exact component={OptimisationPage} />
    <Route path="/red" exact component={TestRedux} />
    <Redirect from="/" to="/opt" />
</Switch>
