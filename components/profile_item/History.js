import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native';
import Items from '../../data/item';
import Sell from '../Sell';
import Upload from '../../screens/Upload';

export default function History() {

  if (Items !== null) {
    return (

      <View style={{ flex: 1, margintop: 50, marginLeft: 10 }}>

        <SafeAreaView style={{ flex: 1 }}>

          <FlatList data={Items} renderItem={({ item }) => (
            <Sell item={item.name} price={item.price} description={item.description}></Sell>
          )} />

        </SafeAreaView>

      </View>
    )
  }

  else {
    return (

      <View style={{ flex: 1, margintop: 50, marginLeft: 10 }}>
        You are not selling anytyhing.
      </View>

    )
  }
}