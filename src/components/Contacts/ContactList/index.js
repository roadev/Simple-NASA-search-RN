import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Body } from 'native-base';
import ContactCard from '../ContactCard';

const ContactList = ({ contacts }) => (
  <FlatList
    data={contacts}
    renderItem={({ item }) => item.image ? (<ContactCard {...item} />) : null}
  />
    // contacts.map(contact => (
    //   <ContactCard {...contact} key={contact.id} />
    // ))

);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
