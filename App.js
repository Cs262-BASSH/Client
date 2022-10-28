import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from "./screens/Home";
import { View, StyleSheet,Image,Button,Dimensions, Alert, Text, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

/* sell, search, buy */
const Stack = createNativeStackNavigator();

export default function App(navigation) {

  const {height, width} = Dimensions.get("window");
    return (
      <View style={styles.container}>
          {/* <View style={styles.header}>
            <Image source={require('./assets/KNIGHTS.png')} height={height} width={width}/>
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}> Welcome Back!</Text>
            <View style={styles.button}>
            <Button title='Log In' color="black" onPress={()=> {navigation.navigate('Login')}}/>
            </View>
            <Text></Text>
            <View style={styles.button}>
            <Button title='Sign Up' color= "black" onPress={() => navigate('Login')}/>
            </View>
          </View> */}
          <Home/>
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
    backgroundColor: '#bc8f8f',
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
	button: {
		backgroundColor: "#FFE4C4",
		borderRadius: 25,
    padding: 10
	}
});