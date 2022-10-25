import Homepage from './Homepage';
import Profile from './Profile';
import Search from './Search';
import Bookmark from './Bookmark';

import { View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Upload from './Upload';

/* This is the tabs */

const Tab = createBottomTabNavigator();

export default function Tabs() {

  // Screen Options
  const screenOptions = ({route}) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'ios-home' : 'ios-home';
      }
      else if (route.name === 'Search') {
        iconName = focused ? 'ios-search' : 'ios-search';
      }
      else if (route.name === 'Profile') {
        iconName = focused ? 'ios-person' : 'ios-person';
      }
      else if (route.name === 'Sell') {
        iconName = focused ? 'logo-usd' : 'logo-usd';
      }
      else if (route.name === "Bookmark") {
        iconName = focused ? "ios-bookmark" : "ios-bookmark";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    shifting: true,
    // Dark mode
    tabBarStyle: {
      backgroundColor: "#121212",
      paddingBottom: "1%",
      paddingTop: "1%"
    },
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTitleStyle: {
      color: '#e4000f',
    },
    tabBarActiveTintColor: "#ffff33",
    tabBarInactiveTintColor: '#e4000f',

    // Light mode
    // tabBarStyle: {
    //   backgroundColor: "#FFFFF7",
    //   paddingBottom: "1%",
    //   paddingTop: "1%"
    // },
    // headerStyle: {
    //   backgroundColor: '#FFFFF7',
    // },
    // headerTitleStyle: {
    //   color: '#990000',
    // },
    // tabBarActiveTintColor: "#4267B2",
    // tabBarInactiveTintColor: '#990000',
  });

  // Home options
  const homepageOptions = ({}) => ({
    headerTitle: "KnightMarket",
    tabBarBadge: 4,
  })

  return (
      <Tab.Navigator style={styles.container} screenOptions={screenOptions}>
        {/* List of tabs */}
        <Tab.Screen name="Home" component={Homepage} options={homepageOptions}/>

        <Tab.Screen name="Sell" component={Upload}/>

        <Tab.Screen name="Search" component={Search} options={{headerShown: false,}}/>

        <Tab.Screen name="Bookmark" component={Bookmark} />

        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create ({
  container: {
  }
})