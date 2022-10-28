import React from 'react';
import { Text, View } from 'react-native';

export default function History() {

  if (Items !== null) {
    return (



      <View style={{ flex: 1, margintop: 50, marginLeft: 10 }}>

        <SafeAreaView style={{ flex: 1 }}>

          <FlatList data={Items} renderItem={({ item }) => (
            <CategorySell item={item.name} price={item.price} description={item.description}></CategorySell>
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