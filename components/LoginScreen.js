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
  TouchableHighlight,
  View
} from 'react-native';

const LoginScreenConstants = {
  labels: {
    username: "Username",
    password: "Password",
    login: "Login"
  },
  colors: {
    background: 'rgb(122,204,122)',
    loginButton: 'rgb(143,204,143)'
  },
  fontSize: 12
}

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  signIn = () => {
    // TODO: Implement authentication logic
    // Temporarily, it should be enough to fake it and navigate to the main view
  }

  render() {
    return (
      <View style={loginViewStyles.loginContainer}>
        <TextInput
          style={[loginViewStyles.authenticationInput, loginViewStyles.usernameInput]}
          placeholder={LoginScreenConstants.labels.username}/>
        <TextInput
          style={[loginViewStyles.authenticationInput, loginViewStyles.passwordInput]}
          placeholder={LoginScreenConstants.labels.password}/>
        <TouchableHighlight
          style={loginViewStyles.loginButton}
          activeOpacity={0.7}
          underlayColor={LoginScreenConstants.colors.loginButton}
          onPress={this.signIn}>
          <Text style={loginViewStyles.loginButtonText}>
            {LoginScreenConstants.labels.login}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const loginViewStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LoginScreenConstants.colors.background,
  },
  authenticationInput: {
    height: 30,
    width: '75%',
    paddingLeft: 12,
    fontSize: LoginScreenConstants.fontSize,
    textAlign: 'left',
    backgroundColor: 'white',
  },
  usernameInput: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  passwordInput: {
    borderTopWidth: 1,
    borderTopColor: LoginScreenConstants.colors.background,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  loginButton: {
    height: 30,
    width: '75%',
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: LoginScreenConstants.colors.loginButton,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    color: 'white',
    fontSize: LoginScreenConstants.fontSize
  }
});