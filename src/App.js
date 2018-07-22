import React from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Contacts from './components/Contacts';
import ContactForm from './components/Contacts/ContactForm';
import Login from './components/Login';

const MainNavigator = createStackNavigator(
  {
    Contacts,
    ContactForm,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Login,
    App: MainNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

const App = () => (
  <Root>
    <AppNavigator />
  </Root>

);


export default App;
