import React, { Component } from 'react';
import { Button, TextInput } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import api from '../../services/api';
import ContactList from './ContactList';

class Contacts extends Component {
  static navigationOptions = {
    title: 'Contact List',
  };

  state = {
    results: [],
    searchText: '',
    isLoading: false,
  };

  handleSearch = async () => {
    this.setState({ isLoading: true });
    const response = await api.searchPlanets(this.state.searchText);
    const results = response.data.collection.items.slice(0, 20).map(i => (
      { name: i.data[0].title, image: i.links[0].href }
    ));
    this.setState({ results, isLoading: false });
  }

  handleChangeSearchText = searchText => this.setState({ searchText });

  render() {
    console.log('state', this.state.contacts);
    const { results } = this.state;
    return (
      <Container>
        <Content padder>
          <TextInput onChangeText={this.handleChangeSearchText} value={this.state.searchText} />
          <Button
            title="NASA search"
            onPress={this.handleSearch}
          />

          {this.state.isLoading ? (<Spinner />) : <ContactList contacts={results} />}
        </Content>

      </Container>


    );
  }
}

export default Contacts;
