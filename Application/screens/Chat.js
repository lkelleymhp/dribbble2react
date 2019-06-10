import React, { Component } from 'react';
import { TouchableOpacity,Text, View, StyleSheet, Image } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Block,  Input, Icon } from '../components';


class Chat extends Component {

  static navigationOptions = {
    headerLeftContainerStyle: {
      paddingLeft: 24
    },
    headerRightContainerStyle: {
      paddingRight: 24
    },
    headerLeft: (
      <TouchableOpacity><Icon menu /></TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity><Icon notification /></TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle><Text h4>Profile</Text></Block>
    )
  }
  state = {
    active: null,
  }

  handleType = id => {
    const { active } = this.state;
    this.setState({ active: active === id ? null : id });
  }

  render() {

  

    return (
      <KeyboardAwareScrollView style={{ marginVertical: 40 }} showsVerticalScrollIndicator={false}>
        <Block center middle style={{ marginBottom: 40, marginTop: 20 }}>

        </Block>
        <Block flex center>
          <Text h2 style={{ marginTop: -15 , left: -65 , fontSize: 20}}>
            Where Do You Want To Go 
          </Text>
          <Image source={require('../assets/images/staticmap.jpg')} style={{width: 350, height:250, marginTop: 50}} />        

          <Block center style={{ marginTop: 50 }}>
            <Input
              full
              label="FROM"
              style={{ marginBottom: 25 }}
            />
            <Input
              full
              email
              label="TO"
              style={{ marginBottom: 25 }}
            />
          

            <Button 
              full
              style={{ marginTop: 50 }}
              onPress={() => navigation.navigate('Map')}
            >
              <Text button> View Routes </Text>
            </Button>
         
          
          </Block>
        </Block>
      </KeyboardAwareScrollView>
    )
  }
}



export default Chat;