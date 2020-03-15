import React, {Component} from 'react';

import {Login, Register} from './components/screens';

import {createStackNavigator} from 'react-navigation-stack';

const IntroStack = createStackNavigator({
  register: {screen: Register},
  screen: {screen: Login},
});

export default IntroStack;
