import Homepage from './Homepage';
import Settings from './Settings';
import Profile from './Profile';
import Search from './Search';

import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* This is where the tabs are added */

const Tab = createBottomTabNavigator();

export default function Tabs() {

  return (
    <Tab.Navigator style={styles.container}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'gold',

          tabBarInactiveTintColor: 'maroon',

          tabBarStyle: {
            backgroundColor: '#FFFDD0',
            paddingBottom: 5,
            height: 55,

          },
        })
      }
    >
      {/* List of tabs */}
      <Tab.Screen name="Home" component={Homepage} options={{ tabBarBadge: 1 }} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
  },

});
