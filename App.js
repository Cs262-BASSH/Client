import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from "./screens/Home";
import { View, StyleSheet,Image,Button,Dimensions, Alert, Text, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* sell, search, buy */
const Stack = createNativeStackNavigator();

export default function App() {

  const {height, width} = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('./assets/KNIGHTS.png')} height={height} width={width}/>
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}> Welcome Back!</Text>
            <Button title='Login In'></Button>
          </View>
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
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal : 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title : {
   fontWeight: 'bold',
  fontFamily: 'Optima',
  }
});