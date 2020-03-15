import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import config from './config';
import {MainFeed, Camera, Profile} from './components/screens';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator({
  home: {
    screen: MainFeed,
    navigationOptions: {
      activeColor: '#ffffff',
      inactiveColor: '#ebaabd',
      barStyle: {backgroundColor: '#d13560'},
    },
  },
  camera: {
    screen: Camera,
    navigationOptions: {
      activeColor: '#ffffff',
      inactiveColor: '#92c5c2',
      barStyle: {backgroundColor: '#2c6d6a'},
    },
  },
  profile: {
    screen: Profile,
    navigationOptions: {
      activeColor: '#ffffff',
      inactiveColor: '#a3c2fa',
      barStyle: {backgroundColor: '#2163f6'},
    },
  },
});

export default TabNavigator;
