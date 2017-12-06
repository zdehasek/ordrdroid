import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {GoogleLogin, GoogleLogout} from 'react-google-login';

import './App.css';
import Head from './Head';
import UserForm from './UserForm';


const responseGoogle = (response) => {
  console.log(response);
}

const logoutGoogle = (logoutGoogle) => {
  console.log(logoutGoogle);
}

class App extends Component {
  render() {
    return (
      <div className="App">

      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        hostedDomain="storyous.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logoutGoogle}
    >
    </GoogleLogout>

        <MuiThemeProvider>
        <Head title="Order Droid" />
        <UserForm />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
