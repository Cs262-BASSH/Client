import Sell from '../components/Sell';
import Items from '../data/item';

import { AsyncStorageStatic, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable, SafeAreaView, } from 'react-native';

// TODO: Add Image

export default function Homepage() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={Items} renderItem={({item}) => (
        <Sell id={item.id} name={item.name} price={item.price} description={item.description} category={item.category}></Sell>)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
});
