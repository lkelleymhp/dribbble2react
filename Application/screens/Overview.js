import React, { Component } from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Block, Card, Text, Icon, Label } from '../components';
import * as theme from '../constants/theme';

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  }
});

class Overview extends Component {
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

  render() {
    return (
      <SafeAreaView style={styles.overview}> 
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
          <Card row  style={styles.margin}>
            <Block flex={1.2}  style={{ marginRight: 20 }}>
              <Text light height={43} size={36} spacing={-0.45}></Text>
              <Text ligth caption  style={{ paddingHorizontal: 16, marginTop: 3 }}>
                WALLET
              </Text>
              {/* <Image 
              style={{ width: 150 , height: 150}}
          source={require('../assets/images/breeze-card.png')}
        /> */}
            </Block>
          </Card>

          <Card
            title="TRIPS"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block row right>
              <Block flex={2} row center right>
            
                <Text paragraph color="gray">Today</Text>
              </Block>
              <Block row center right>
               
                <Text paragraph color="gray">Yesterday</Text>
              </Block>
            </Block>
            <Block>
              {/* <Text>Chart</Text> */}
            </Block>
          </Card>

          <Card
            title="WEEKLY STATS"
            style={[styles.margin, { marginTop: 18 }]}
          >
              <Text  h3 style={{ marginTop: 17 }}> 10 hrs</Text>
              <Text paragraph color="gray">Saved From Sitting In Traffic</Text>
          
              <Text h3 style={{ marginTop: 17 }}> $158 </Text>
              <Text paragraph color="gray">Saved From Spending On Gas </Text>

              <Text h3 style={{ marginTop: 17 }}> 100 lbs </Text>
              <Text paragraph color="gray">Saved From Your Carbon Footprint </Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Overview;