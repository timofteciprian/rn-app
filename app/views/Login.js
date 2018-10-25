import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage } from 'react-native'

export class Register extends React.Component {
  static navigationOption = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      passwrd: '',
    }
  }
  cancelLogin = ()=>{
    Alert.alert('Registration cancelled')
    this.props.navigation.navigate('HomeRt')
  }

  loginUser = ()=>{

    if( !this.state.username ){
      Alert.alert('Please enter a username')
    }
    else if ( !this.state.passwrd ){
      Alert.alert('Please enter a password')
    }
    else {
      
    }
  }

}