import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Body } from 'native-base';


const ContactCard = ({ name, image }) => (
            <Card>
              <CardItem>
                <Body>
                    <Text style={{ marginBottom: 15 }}>{name}</Text>
                    <Image source={{ uri: image }} style={{ width: 150, height: 150 }}/>
                    {/* <Text>{lastName}</Text>
                    <Text>{age}</Text>
                    <Text>{phone}</Text> */}
                  </Body>
              </CardItem>
            </Card>

);

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactCard;
