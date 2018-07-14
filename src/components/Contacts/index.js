import React, { Component } from 'react';
import { View, Button, AsyncStorage, TextInput } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import api from '../../services/api';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class Contacts extends Component {

  static navigationOptions = {
    title: 'Contact List',
  };

  state = {
    results: [],
    searchText: '',
    isLoading: false
  };

  async componentDidMount() {
    // const contacts = await AsyncStorage.getItem('contacts');
    // const results = await fetch();
    // const resultsJson = await results.json();
    // console.log(resultsJson.collection.items);
    // this.setState({
    //   results: resultsJson.collection.items.map(i => (
    //     { name: i.data[0].title, image: i.links[0].href }
    //   ))
    // });
    // console.log('contacts', contacts);
    // if (contacts) {
    //   this.setState({ contacts: JSON.parse(contacts) });
    // }
  }

  handleSearch = async () => {
    const response = await api.searchPlanets(this.state.searchText);
    const results = response.data.collection.items.slice(0, 20).map(i => (
            { name: i.data[0].title, image: i.links[0].href }
          ))
    this.setState({ results });
  }

  handleChangeSearchText = searchText => this.setState({ searchText });

  render() {
    const { navigation } = this.props;
    console.log('state', this.state.contacts);
    const { results } = this.state;
    return (
      <Container>
        <Content padder>
          {this.state.isLoading ? (<Spinner />) : <ContactList contacts={results} />}

            <TextInput onChangeText={this.handleChangeSearchText} value={this.state.searchText} />
            <Button
              title="NASA search"
              onPress={
                this.handleSearch
                // () =>
                //   navigation.navigate(
                //     'ContactForm',
                //   )
              }
            />
        </Content>

      </Container>


    )
  }

}

export default Contacts;
