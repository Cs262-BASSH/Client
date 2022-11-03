import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from "./screens/Home";
import { View, StyleSheet,Image,Button,Dimensions, Alert, Text, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

/* sell, search, buy */

const Stack = createNativeStackNavigator();

  export default function Welcome() {

  const {height, width} = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('./assets/knight.png')} height={height} width={width}/>
          </View>
          <View style={styles.footer}>
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.screen style={styles.button} name="Profile." component={Login} options={{headerShown: false}}/>
              
            </Stack.Navigator></NavigationContainer>
          </View>
          {/* <SignUp/> */}
      </View>
    )
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header : {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer : {
    flex: 1,
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal : 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title : {
   fontWeight: 'bold',
  fontFamily: 'Optima',
  fontSize: 30,
  },
  btn_title : {
    fontWeight: 'bold',
   fontFamily: 'Optima',
   fontSize: 20,
   },
	button: {
		backgroundColor: "beige",
		borderRadius: 25,
    padding: 10,
    alignItems: 'center'
	}
});