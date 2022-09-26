import Homepage from './Homepage';
import Settings from './Settings';
import Profile from './Profile';

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* This is where the tabs are added */

const Tab = createBottomTabNavigator();

export default function Tabs() {

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        /* Needs to be Rework: ios-list-box is not a valid icon name */
        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      {/* List of tabs */}
      <Tab.Screen name="Home" component={Homepage} options={{ tabBarBadge: 1 }} />
      {/* Profile does not have an icon yet */}
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
