import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ContactCard from '../ContactCard';

const ContactList = ({ contacts }) => (
  <FlatList
    data={contacts}
    renderItem={({ item }) => (item.image ? (<ContactCard {...item} />) : null)}
  />
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
