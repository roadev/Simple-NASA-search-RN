import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ContactCard from '../ContactCard';

const ContactList = ({ contacts }) => (
  <View>
    <Container>
      <Content>
      {
        contacts.map(contact => (
          <ContactCard {...contact} key={contact.id} />
        ))
      }
    </Content>
  </Container>
  </View>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
