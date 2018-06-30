import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ContactCard = ({ name, lastName, age, phone }) => (
  <View>
    <Text>{name}</Text>
    <Text>{lastName}</Text>
    <Text>{age}</Text>
    <Text>{phone}</Text>
  </View>
);

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactCard;
