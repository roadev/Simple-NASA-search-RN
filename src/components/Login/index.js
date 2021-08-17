import React, { Component } from 'react';
import { TextInput, View, Button, Text, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import firebase from 'react-native-firebase';
import styles from './styles';

export default class extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  handleLogin = () => {
    const { email, password, navigation } = this.state;
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('App'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.loginContainer}>
        <Icon
          name="login-variant"
          type="MaterialCommunityIcons"
          style={{ fontSize: 100, color: 'green' }}
        />
        <View style={[styles.inputContainer, { width: width * 0.75 }]}>
          <TextInput
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View style={[styles.inputContainer, { width: width * 0.75 }]}>
          <TextInput
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry
            value={this.state.password}
          />
        </View>
        {this.state.errorMessage ? (<Text>{this.state.errorMessage}</Text>) : null}

        <Button
          title="Sign In"
          onPress={this.handleLogin}
        />
      </View>
    );
  }
}
