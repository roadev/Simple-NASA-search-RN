import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import Contacts from './components/Contacts';
import ContactForm from './components/Contacts/ContactForm';



const MainNavigator = createStackNavigator(
  {
    Contacts,
    ContactForm,
  }
)

const App = () => (
  <MainNavigator />
)


export default App;
