import React from 'react';
import Home from './app/views/Home.js'
import { Contact } from './app/views/Contact.js'
import { StackNavigator } from 'react-navigation'
import { Register } from './app/views/Register'

const MyRoutes = StackNavigator({
  HomeRT: { screen: Home },
  ContactRT: { screen: Contact },
  RegisterRT: { screen: Register },
},
  { initialRouteName: 'HomeRT'}
)

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    )
  }
}

