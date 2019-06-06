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
      <KeyboardAwareScrollView  style={styles.black} style={{ marginVertical: 40 }} showsVerticalScrollIndicator={false}>
        <Block center middle style={{ marginBottom: 40, marginTop: 20}}>
      
        </Block>
        <Block flex center style={{backgroundColor: 'black'}}>
          <Text h3 style={{ marginBottom: 3 , right: 108 }}>
            SIGN UP 
          </Text>
          <Text h3 style={{ marginBottom: 3 , marginLeft: -81 }}>
           TO GET STARTED!
          </Text>
          <Text paragraph color="black3" style={{  marginLeft: -40 }}>
            Free forever. No credit card needed.
          </Text>

          <Block center style={{ marginTop: 25 }}>
            <Input
              full
              label="Full name"
              style={{ marginBottom: 25 }}
            />
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
              style={{ marginBottom: 12 }}
              onPress={() => navigation.navigate('Overview')}
            >
              <Text button>Create Account</Text>
            </Button>
            <Text paragraph color="gray">
              Already have an account? <Text
                height={18}
                color="blue"
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

