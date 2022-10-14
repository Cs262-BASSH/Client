import Sell from '../components/Sell'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable } from 'react-native';

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
    backgroundColor: 'black',
  },
});
