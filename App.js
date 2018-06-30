import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Counter extends Component {
  state = {
    count: this.props.count
  };

  handleOnClick = () =>
    this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <View>
        <Text>The count is: {this.state.count}</Text>
        <Button onPress={this.handleOnClick}
          title="Click me"
        />
      </View>
    );
  }
}

const SuperCount = () => (
  <View>
    <Counter count={1} />
  </View>
);

const App = () => (
  <View
    style={
      {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  >
    <Text>Hello RN!!!!!</Text>
    <SuperCount />
  </View>
)


export default App;
