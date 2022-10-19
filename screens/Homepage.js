import Sell from '../components/Sell'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable, SafeAreaView } from 'react-native';
import items from '../data/categories'
import { useState } from 'react';

/*
  TODO: Change our hardcoded example in Homepage.js and Example.js to use data object instead of <Sell> and <smallSell>.
*/

export default function Homepage() {
  const [items, setitems] = useState([
  {
    name: "lava lamp", price: 8.8,
    description: "coool lava lamp"
},
{
    name: "small lava lamp", price: 8.7, 
    description: 'small lava lamp'
},
{
    name: "big lava lamp", price: 8.9, 
    description: 'ig lava lamp'
},
{
  name: "big lava lamp", price: 8.9, 
  description: 'ig lava lamp'
},
{
  name: "big lava lamp", price: 8.9, 
  description: 'ig lava lamp'
},
{
  name: "big lava lamp", price: 8.9, 
  description: 'ig lava lamp'
},
]);







  return (
<SafeAreaView style={{flex: 1}}>

      {/* A hardcoded example */}
      <FlatList data={items} renderItem={({item}) => (
        <Sell item = {item.name}  price = {item.price} description = 'this is a cool lava lamp'></Sell>
      )} />
      
      </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
});
