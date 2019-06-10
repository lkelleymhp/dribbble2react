import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import OverviewStack from './Overview';
import Chat from '../screens/Chat';
import Service from '../screens/Service';
import Map from '../screens/Map';

export default createDrawerNavigator({
  OverviewStack,
  Chat,
  Service,
  Map,

});
