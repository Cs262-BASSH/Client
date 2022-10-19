import Sell from '../components/Sell'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable } from 'react-native';

/*
  TODO: Change our hardcoded example in Homepage.js and Example.js to use data object instead of <Sell> and <smallSell>.
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

      {/* A hardcoded example */}
      <Sell></Sell>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
});
