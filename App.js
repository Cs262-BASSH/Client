import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from "./screens/Home";
import { View, StyleSheet,Image,Button,Dimensions, Alert, Text, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

/* sell, search, buy */

const Stack = createNativeStackNavigator();

  export default function App() {

    return (
      <View style={styles.container}>
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