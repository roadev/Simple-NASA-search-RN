import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import ContactCard from '../ContactCard';

const ContactList = ({ contacts }) => (
  // <Container>
    //
        contacts.map(contact => (
          <ContactCard {...contact} key={contact.id} />
        ))

    // </Content>


  // </Container>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
