import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import { Container, Content } from 'native-base';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class Contacts extends Component {

  static navigationOptions = {
    title: 'Contact List',
  };

  state = {
    contacts: []
  };

  async componentDidMount() {
    const contacts = await AsyncStorage.getItem('contacts');
    console.log('contacts', contacts);
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  render() {
    const { navigation } = this.props;
    console.log('state', this.state.contacts);
    const { contacts } = this.state;
    return (
      <Container>
    <Content padder>
            <ContactList contacts={contacts} />
            <Button
              title="Create contact"
              onPress={
                () =>
                  navigation.navigate(
                    'ContactForm',
                  )
              }
            />
  </Content>

</Container>


    )
  }

}

export default Contacts;
