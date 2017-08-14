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
  constructor(props) {
    super(props);
    this.state = {
      username: 'Useless Placeholder',
      password: ''
    };
  }

  render() {
    return (
      <View style={loginViewStyles.container}>
        <Text style={loginViewStyles.usernameLabel} numberOfLines={1} selectable={false}>
          {LoginScreenConstants.labels.usernameLabel}
        </Text>
        <TextInput style={loginViewStyles.usernameInput}/>
        <Text style={loginViewStyles.passwordLabel} numberOfLines={1} selectable={false}>
          {LoginScreenConstants.labels.passwordLabel}
        </Text>
        <TextInput style={loginViewStyles.passwordInput}/>
        <Button style={loginViewStyles.submitButton}/>
      </View>
    );
  }
}

const loginViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // Tells us how its children will be laid our in the primary direction (column in this case)
    justifyContent: 'center',
    // Tells us how its children will be laid our in the secondary direction (row in this case)
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  usernameLabel: {
    flex: 1,
    textAlign: 'left',
  },
  usernameInput: {
    flex: 1,
    textAlign: 'left',
  },
  passwordLabel: {
    flex: 1,
    textAlign: 'left',
  },
  passwordInput: {
    flex: 1,
    textAlign: 'left',
  },
  submitButton: {
    flex: 1,
    textAlign: 'left',
  }
});

// AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
