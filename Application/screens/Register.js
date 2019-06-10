import React, { Component } from 'react';
import {
  Image, StyleSheet, Dimensions, TouchableWithoutFeedback,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Block, Text, Input } from '../components';
import * as theme from '../constants/theme';

const { height } = Dimensions.get('window');

class Register extends Component {
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
      
        <Block flex center style={{marginTop: 50}}>
          <Text h3 style={{ marginBottom: 3, marginTop:50 }}>
            SIGN UP TO GET STARTED!

          </Text>
          <Text h3 style={{ marginBottom: 3 , marginLeft: -89 }}>
          </Text>
          <Text paragraph color="black3" style={{  marginLeft: -40 }}>
            
          </Text>

          <Block center style={{ marginTop: 65, color: 'black' }}>

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
            />

            <Button
              full
              style={{ marginTop: 150 }}
              onPress={() => navigation.navigate('Service')}
            >
              <Text button>Create Account</Text>
            </Button>
            <Text paragraph color="black">
              Already have an account? <Text
                height={18}
                color="#0193CF"
                onPress={() => navigation.navigate('Login')}>
                Sign in
              </Text>
            </Text>
          </Block>
        </Block>
      </KeyboardAwareScrollView>
    )
  }
}
const styles = StyleSheet.create({
  back: {
    backgroundColor: 'black',
  },
});

export default Register;

