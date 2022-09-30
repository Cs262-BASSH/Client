// import Login from './components/Login';
// import SignIn from './components/SignIn';
import Tabs from './components/Tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import SlashScreen from './components/SplashScreen';
import SplashScreen from './components/SplashScreen';

/* sell, search, buy */
export default function App() {

  return (
    // <SafeAreaProvider>
    //   <SplashScreen></SplashScreen>
    // </SafeAreaProvider>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tabs></Tabs>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
