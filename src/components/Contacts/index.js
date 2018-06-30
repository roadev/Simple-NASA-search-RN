import React, { Component } from 'react';
import { View } from 'react-native';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class Contacts extends Component {
  state = {
    contacts: []
  };

  createContact = contact => {
    const contacts = [...this.state.contacts, contact];
    this.setState({ contacts });
  }

  render() {
    return (
      <View>
        <ContactList contacts={this.state.contacts} />
        <ContactForm createContact={this.createContact} />
      </View>

    )
  }

}

export default Contacts;
