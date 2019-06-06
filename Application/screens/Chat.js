import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Block,  Input } from '../components';


class Chat extends Component {
  state = {
    active: null,
  }

  handleType = id => {
    const { active } = this.state;
    this.setState({ active: active === id ? null : id });
  }

  render() {
    const { navigation } = this.props;

  

    return (
      <KeyboardAwareScrollView style={{ marginVertical: 40 }} showsVerticalScrollIndicator={false}>
        <Block center middle style={{ marginBottom: 40, marginTop: 20 }}>
      
        </Block>
        <Block flex center>
          <Text h2 style={{ marginTop: -15 , left: -40 , color: '#0193CF', fontSize: 20}}>
            Where Do You Want To Go 
          </Text>
        
        

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
              style={{ marginTop: 120, backgroundColor: '#333333', color: '#fff' }}
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