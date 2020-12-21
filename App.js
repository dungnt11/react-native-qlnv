import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './screens';

// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <NavigationContainer>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Screens />
      </NavigationContainer>
    );
  }

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
