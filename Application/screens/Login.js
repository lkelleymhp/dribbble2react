import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Dimensions } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const { height } = Dimensions.get('window');

class Login extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={height * 0.2}
      >
        <Block center left>
   
          <Block flex={2.5} left>
            <Text h3 style={{ marginTop: 20 , fontSize: 37 , marginLeft: -5 ,lineHeight: -0.5}}>
           {"\n"} FIND {"\n"} YOUR {"\n"} ROUTE
            </Text>
            <Text paragraph color="black3" style={{marginLeft: 5 , marginTop: 15}}>
            {"\n"}Find The Quickest {"\n"}Most Affordable Route {"\n"}For Your Workday Commute
            </Text>
            
            <Block center style={{ marginTop: 44 }}>
              <Input
                full
                email
                label="Email address"
                style={{ marginBottom: 25 }}
              />
              <Input
                full
                password
                label="Password"
                style={{ marginBottom: 25 }}
                rightLabel={
                  <Text
                    paragraph
                    color="gray"
                    onPress={() => navigation.navigate('Forgot')}
                  >
                    Forgot password?
                  </Text>
                }
              />

              <Button
                full
                style={{ marginBottom: 12 }}
                onPress={() => navigation.navigate('Overview')}
              >
                <Text button>Log In</Text>
              </Button>
              <Text paragraph color="gray" >
                 <Text left style={{ marginLeft: 50 }}
                  height={18}
                  color= 'rgb(1,147,207)'
                  onPress={() => navigation.navigate('Register')}>
                   {/* Don't have an account? */}
                </Text>
              </Text>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
}

export default Login;