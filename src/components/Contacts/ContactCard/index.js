import React from 'react';
import { Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Body } from 'native-base';


const ContactCard = ({ name, image }) => (
  <Card>
    <CardItem>
      <Body>
        <Text style={{ marginBottom: 15 }}>{name}</Text>
        <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
      </Body>
    </CardItem>
  </Card>

);

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ContactCard;
