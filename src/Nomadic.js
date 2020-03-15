import React, {Component} from 'react';
import {Login, Register, Splash} from './components/screens';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import TabNavigator from './TabNavigator';
// import IntroStack from './IntroStack';

// const IntroStack = createStackNavigator({
//   register: {screen: Register},
//   login: {screen: Login},
// });

const MainStack = createSwitchNavigator({
  splash: Splash,
  login: Login,
  register: Register,
  // intro: IntroStack,
  main: TabNavigator,
});

const AppContainer = createAppContainer(MainStack);

class Nomadic extends Component {
  render() {
    return <AppContainer />;
  }
}

export default Nomadic;

// import React, {Component} from 'react';
// import {View, StyleSheet} from 'react-native';
// import config from './config';
// import {Mainfeed, Login} from './components/screens';

// class Nomadic extends Component {
//   render() {
//     return <Login />;
//   }
// }

// export default Nomadic;
