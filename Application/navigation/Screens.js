import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Profile from './Overview';
import Routes from '../screens/Chat';
import Map from '../screens/Map';
import Settings from '../screens/Service';


export default createDrawerNavigator({
  Profile,
  Routes,
  Map,
  Settings,
 

});
