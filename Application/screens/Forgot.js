import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const styles = StyleSheet.create({
  forgot: {
    flex: 1
  }
});

class Forgot extends Component {
  render() {
    const { navigation } = this.props;


    return (

<Block flex center >
          <Text h3 style={{ marginTop:150 , left:-75 }}>
 Forgot Password
          </Text>
          <Text h5 style={{marginTop:25 ,left: -5 }}>
          Please allow up to 5 minutes to recieve an email. {"\n"}Once you recieve the email please select the link to{"\n"} reset your password
          </Text>
      
      <Block center middle>
                    <Input
              full
              label="Email Address"
              style={{ marginBottom: 25 }}
            />   


<Button
              full
              style={{ marginBottom: 12 }}
              onPress={() => navigation.navigate('Login')}
            >
              <Text button>Send Link</Text>
            </Button>
         
      </Block>
      </Block>
    )
  }
}

export default Forgot;