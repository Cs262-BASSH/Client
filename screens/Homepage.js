import Sell from '../components/Sell'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable } from 'react-native';

/*
Fixes:
- Maybe use TouchableHighlight instead of TouchableOpacity
- Title needs to wraps down
- Description needs to wrap down
- Move bookmark icon to bottom left
*/

/*
Have not done:
- When size gets big, change layout
*/

export default function Homepage() {

  return (
    <ScrollView style={styles.container}>
      {/* A hardcoded example */}
      <Sell></Sell>

      {/* A hardcoded example */}
      <Sell></Sell>

      {/* A hardcoded example */}
      <Sell></Sell>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c19a6b',
  },
});
