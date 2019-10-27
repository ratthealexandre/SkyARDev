//Program de NOTAM pour l'aviation 
//Alexandre Ratthé
//Brian McWilliams

//Importation de bibliothèque
import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, Platform } from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from './components/HomeScreen';
import MAPS from './components/MAPS';
import NOTAMS from './components/NOTAMS';


export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home', color: '#1e90ff' },
      { key: 'Maps', title: 'Maps', icon: 'map', color: '#009688' },
      { key: 'NOTAMS', title: 'NOTAMS', icon: 'airplanemode-active', color: '#795548' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'home':
        return <HomeScreen jumpTo={jumpTo} />;
      case 'Maps':
        return <MAPS jumpTo={jumpTo} />;
      case 'NOTAMS':
          return <NOTAMS jumpTo={jumpTo} />;
    }
  }

  _renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    Maps: MAPS,
    NOTAMS: NOTAMS,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}