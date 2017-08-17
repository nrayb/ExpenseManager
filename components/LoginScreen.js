/**
 * Created by: Noel Barron
 * 
 * Simple purpose of a mock login screen.
 * TODO: Polish UI with wanted colour and styling
 * TODO: Add authentication logic
 * TODO: Create centralized location for translatable strings
 * TODO: Remove hardcoded font sizes. The sizes should be different for different screen sizes
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';

const LoginScreenConstants = {
  labels: {
    username: "Username",
    password: "Password",
    login: "Login"
  }
}

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Useless Placeholder',
      password: ''
    };
  }

  render() {
    return (
      <View style={loginViewStyles.loginContainer}>
        <TextInput style={[loginViewStyles.authenticationInput, loginViewStyles.usernameInput]}
                   placeholder={LoginScreenConstants.labels.username}/>
        <TextInput style={[loginViewStyles.authenticationInput, loginViewStyles.passwordInput]}
                   placeholder={LoginScreenConstants.labels.password}/>
        <Button title={LoginScreenConstants.labels.login}
                raised
                buttonStyle={loginViewStyles.loginButton}
                textStyle={loginViewStyles.loginButtonText}
                onPress= { () => {
                  // Do something
                }}/>
      </View>
    );
  }
}

const loginViewStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(122,204,122)',
  },
  authenticationInput: {
    height: 30,
    width: '75%',
    paddingLeft: 12,
    fontSize: 12,
    textAlign: 'left',
    backgroundColor: 'white',
  },
  usernameInput: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  passwordInput: {
    borderTopWidth: 1,
    borderTopColor: 'rgb(122,204,122)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  loginButton: {
    height: 25,
    borderColor: 'white',
    textAlign: 'left'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 30
  }
});