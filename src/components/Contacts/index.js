import React, { Component } from 'react';
import { View, Button } from 'react-native';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class Contacts extends Component {
  state = {
    contacts: []
  };

  createContact = contact => {
    const contacts = [...this.state.contacts, { ...contact, id: this.state.contacts.length + 1 }];
    this.setState({ contacts });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <ContactList contacts={this.state.contacts} />
        <Button
          title="Create contact"
          onPress={
            () =>
              navigation.navigate(
                'ContactForm',
                { createContact: this.createContact },
              )
          }
        />
        {/* <ContactForm createContact={this.createContact} /> */}
      </View>

    )
  }

}

export default Contacts;
