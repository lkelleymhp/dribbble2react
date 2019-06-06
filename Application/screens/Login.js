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
        keyboardVerticalOffset={height * 0.2}
      >
        <Block center left >
   
          <Block flex={2.5} left style={[styles.back]}>
            <Text h3 style={{ marginTop: 20 , fontSize: 37 , marginLeft: -5 ,
              color: 'white',lineHeight: -0.5}}>
           {"\n"} FIND {"\n"} YOUR {"\n"} ROUTE
            </Text>
            <Text paragraph color="white" style={{marginLeft: 5 , marginTop: -10}}>
            {"\n"}Find The Quickest Route {"\n"}For Your Workday Commute
            </Text>
            
            <Block center style={{ marginTop: 44 }}>
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
                    color="grey"
                    onPress={() => navigation.navigate('Forgot')}
                    style={{ marginTop: -25 , marginBottom: 25 ,right: -78 }}
                  >
                    Forgot password?
                  </Text>
              <Button
                full
                style={{ marginBottom: 12 }}
                onPress={() => navigation.navigate('Overview')}
              >
                <Text button>Log In</Text>
              </Button>
              <Text paragraph color="gray" >
                 <Text 
                  height={18}
                  color= 'grey'
                  onPress={() => navigation.navigate('Register')}>
                   Don't have an account?
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