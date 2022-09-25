// import Login from './components/Login';
// import SignIn from './components/SignIn';
import Tabs from './components/Tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

/* sell, search, buy */
export default function App() {

  return (
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
