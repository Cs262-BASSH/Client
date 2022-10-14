// import Login from './components/Login';
// import SignIn from './components/SignIn';

import Home from "./screens/Home";
import { View, StyleSheet} from 'react-native';

/* sell, search, buy */
export default function App() {

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
