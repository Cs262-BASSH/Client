// import Login from './components/Login';
// import SignIn from './components/SignIn';
import Tabs from './components/Tabs';

import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity , StyleSheet, View, Text, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function MainScreen( { navigation } ) {
  return (

  
    <View style={styles.container}>

      <ScrollView style={[styles.scroll_container]}> 
        <View style={styles.inner}>
          <TouchableOpacity style={styles.button}>

          </TouchableOpacity>
        </View>
      <Text>screeenasdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd</Text>
       </ScrollView>


      <View style={styles.topContainer}>
        <Text>Our main screeen</Text>
      </View>


    </View>

  );
}




function Search_Screen( { navigation } ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function Sell_Screen( { navigation } ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sell Screen</Text>
    </View>
  );
}






/* sell, search, buy */
export default function App() {

  
  return (
    <NavigationContainer>
      <Tab.Navigator> 
          <Tab.Screen name="MainScreen" component={MainScreen} />
          <Tab.Screen name="Search_Screen" component={Search_Screen} />
          <Tab.Screen name="Sell_Screen" component={Sell_Screen} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  scroll_container: {
    marginHorizontal: 20,
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  inner:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },


  button: {
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
  },

  topContainer:{
    alignItems: 'stretch',
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },


  styleText:{
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      // alignItems: 'center'

  }
});
