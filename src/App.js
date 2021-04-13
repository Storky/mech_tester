import React from 'react';
import PropTypes from 'prop-types'
import {
    Route, Switch, Redirect, withRouter
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'core/theme';
import routes from 'core/routes'


import './App.css';
import './assets/styles/scss.scss'
import SiteWrapper from 'containers/SiteWrapper/SiteWrapper';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <SiteWrapper>{routes}</SiteWrapper>
      </ThemeProvider>
  );
}

export default withRouter(App);
