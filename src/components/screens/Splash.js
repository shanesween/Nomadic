import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import config from '../../config';

class Splash extends Component {
  render() {
    return (
      <View
        style={{
          height: 100 + '%',
          width: 100 + '%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('register')}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('login')}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  input: {
    height: 50,
    width: 100 + '%',
    marginHorizontal: 70,
    color: 'white',
    backgroundColor: 'salmon',
    marginBottom: 20,
  },
});
export default Splash;
