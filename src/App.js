import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Root } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import Contacts from './components/Contacts';
import ContactForm from './components/Contacts/ContactForm';

const MainNavigator = createStackNavigator(
  {
    Contacts,
    ContactForm,
  }
);

const App = () => (
  <Root>
    <MainNavigator />
  </Root>

);


export default App;
