import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';

const ContactList = ({ contacts }) => (
  <View>
      {
        contacts.map(contact => (
          <View>
            <Text>{contact.name}</Text>
            <Text>{contact.lastName}</Text>
            <Text>{contact.age}</Text>
            <Text>{contact.phone}</Text>
          </View>
        ))
      }
  </View>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
