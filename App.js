import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

/* sell, search, buy */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to KnightMarket</Text>
      <StatusBar style="auto" />

      {/* Login/Sign in Page */}
      <View>
        <Button title='Login In'></Button>
        <Button title='Sign In'></Button>
      </View>
    </View>
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
