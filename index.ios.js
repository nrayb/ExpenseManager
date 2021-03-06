/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LoginScreen } from './components/LoginScreen.js'

const ExpenseManager = StackNavigator({
  // TODO: Ofcourse we have to add a lot more logic here
  // and a lot of handlers for multiple screens
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

AppRegistry.registerComponent('ExpenseManager', () => ExpenseManager);
