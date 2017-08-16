/**
 * Created by: Noel Barron
 * 
 * Simple purpose of a mock login screen.
 * TODO: Polish UI with wanted colour and styling
 * TODO: Add authentication logic
 * TODO: Create centralized location for 
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
    usernameLabel: "Username",
    passwordLabel: "Password"
  }
}

export class LoginScreen extends Component {
  // Ideally we wouldn't want the header of the app to show up,
  // But I added this for testing's sake. will remove in the future
  static navigationOptions = {
    title: 'Welcome',
  };
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
        <Text style={loginViewStyles.usernameLabel} numberOfLines={1} selectable={false}>
          {LoginScreenConstants.labels.usernameLabel}
        </Text>
        <TextInput style={loginViewStyles.usernameInput}
                   placeholder="Please type your username"/>
        <Text style={loginViewStyles.passwordLabel} numberOfLines={1} selectable={false}>
          {LoginScreenConstants.labels.passwordLabel}
        </Text>
        <TextInput style={loginViewStyles.passwordInput}
                   placeholder="Please enter your password"/>
        <Button title='Submit'
                style={loginViewStyles.submitButton}/>
      </View>
    );
  }
}

const loginViewStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    // Tells us how its children will be laid our in the primary direction (column in this case)
    justifyContent: 'center',
    // Tells us how its children will be laid our in the secondary direction (row in this case)
    alignItems: 'center',
    backgroundColor: 'green'
  },
  usernameLabel: {
    height: 25,
    textAlign: 'left',
  },
  usernameInput: {
    height: 25,
    textAlign: 'left',
  },
  passwordLabel: {
    height: 25,
    textAlign: 'left',
  },
  passwordInput: {
    height: 25,
    textAlign: 'left',
  },
  submitButton: {
    height: 25,
    textAlign: 'left',
  }
});

// AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
