import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Body } from 'native-base';


const ContactCard = ({ name, lastName, age, phone }) => (
  <View>

        <Card>
          <CardItem>
            <Body>
              <Text>{name}</Text>
              <Text>{lastName}</Text>
              <Text>{age}</Text>
              <Text>{phone}</Text>
            </Body>
          </CardItem>

        </Card>



  </View>
);

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactCard;
