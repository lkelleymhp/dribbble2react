import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions, StyleSheet } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const { height } = Dimensions.get('window');



class Login extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView 
        enabled
        behavior="padding"
        style={{ flex: 1, backgroundColor: 'black' }}
        keyboardVerticalOffset={height * 0.2} >
        <Block center left style={{ marginTop: 25}} >
   
          <Block flex={2.5} left style={[styles.back]}>
            <Text h3 style={{ marginTop: 15 , fontSize: 47 , marginLeft: -5 ,
              color: 'white',lineHeight: -0.5}}>
           {"\n"} FIND {"\n"} YOUR {"\n"} ROUTE
            </Text>
            <Text paragraph color="white" style={{marginLeft: 5 , marginTop: -10, fontSize: 20}}>
            {"\n"}Find The Quickest Route {"\n"}For Your Workday Commute
            </Text>
            
            <Block  style={{ marginTop: 65, color: 'white' }}>
              <Input
                full
                email
                label="Email address"
                style={{ marginBottom: 25}}
              />
              <Input
                full
                password
                label="Password"
                style={{ marginBottom: 25 }}
              />
               <Text
                    paragraph 
                    color="white"
                    onPress={() => navigation.navigate('Forgot')}
                    style={{ marginTop: -25 , marginBottom: 25 , textAlign: 'right' , fontSize: 14 }}
                  >
                    Forgot Password ?
                  </Text>
              <Button
                full
                style={{ marginTop: 50 }}
                onPress={() => navigation.navigate('Overview')}
              >
                <Text button>Log In</Text>
              </Button>
              <Text paragraph color="gray" style={{ fontSize:14, marginTop: 15}} >
                 <Text 
                  height={18}
                  color= 'white'
                  
                  onPress={() => navigation.navigate('Register')}>
                   Don't Have An Account?
                </Text>
              </Text>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'black',
  },
});

export default Login;