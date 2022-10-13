import Homepage from './Homepage';
import Profile from './Profile';
import Search from './Search';

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../shared/header';
import Upload from './Upload';

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
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          shifting: true
        })}
      >
        {/* List of tabs */}
        <Tab.Screen name="Home" component={Homepage} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation}/>
          )
        })} />
        {/* Profile does not have an icon yet */}
        <Tab.Screen name="Search" component={Search} options={{headerShown: false,}}/>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Upload" component={Upload}
        options={{tabBarButton: () => null,
                  tabBarVisible:false}} />
        
      </Tab.Navigator>
  )
}
