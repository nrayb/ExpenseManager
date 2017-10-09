/**
 * Created by: Noel Barron
 * 
 * Simple mock 'main' screen to experiment on navigation
 * 
 * The real app will likely not use the concept of a 'main'
 * screen and just have a drawer with multiple screens where
 * we assign a default screen which will serve as the main screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const MainScreenConstants = {
  labels: {},
  colors: {
    background: 'black'
  },
  fontSize: 12
}

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={mainViewStyles.mainContainer}>
      </View>
    );
  }
}

const mainViewStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MainScreenConstants.colors.background,
  }
});