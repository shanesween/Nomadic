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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        email: '',
        password: '',
      },
    };
  }

  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials,
    });
  }

  register() {
    //send credentials to server
    //if signup success
    // this.props.navigation.navigate('main');
    // alert(JSON.stringify(this.state.credentials));

    return fetch(config.baseUrl + 'signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then(response => response.json())
      .then(jsonResponse => {
        // console.log(JSON.stringify(jsonResponse));
        if (jsonResponse.confirmation === 'success') {
          this.props.navigation.navigate('main');
        } else {
          throw new Error({message: 'Sorry, try again'});
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }
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
        <Text>Register!!</Text>
        <TextInput
          value={this.state.email}
          placeholder="email"
          onChangeText={text => this.updateText(text, 'email')}
          style={style.input}
        />
        <TextInput
          value={this.state.password}
          secureTextEntry
          onChangeText={text => this.updateText(text, 'password')}
          placeholder="Password"
          style={style.input}
        />
        <Button
          title="Signup"
          onPress={() => {
            this.register();
          }}
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
export default Register;
