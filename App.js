// Import a library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from "./src/components/Header";


// Create a component
class App extends Component {
  render(){
    return(
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
    )
  }
}

export default App