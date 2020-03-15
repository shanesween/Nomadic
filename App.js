import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Nomadic from './src/Nomadic';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return <Nomadic />;
};

export default App;
