import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ContactForm from '../ContactForm';

class Contact extends Component {

  state = {
    contacts: []
  };

  createContact = contact => {
    const contacts = [...this.state.contacts, contact];
    this.setState({ contacts });
  }



  render() {

    const contacts = this.state.contacts.map(contact => (
      <View>
        <Text>{contact.name}</Text>
        <Text>{contact.lastName}</Text>
        <Text>{contact.age}</Text>
        <Text>{contact.phone}</Text>
      </View>
    ));

    return (
      <View>
        <ContactForm createContact={this.createContact} />
        <View>
          {contacts}
        </View>
      </View>
    );
  }

}

export default Contact;
