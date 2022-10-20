import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet ,ScrollView,SafeAreaView, FlatList} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallSell from '../smallSell';
import SearchBar from '../SearchBar';

export default function Example() {
    const [searchText, setSearchText] = useState();   
    
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


    <View style={{ flex: 1, margintop: 50, marginLeft: 10 }}>
        <View>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </View>




        <SafeAreaView style={{flex: 1}}>


        <FlatList data={items} renderItem={({item}) => (
            <SmallSell item = {item.name}  price = {item.price} description = 'this is a cool lava lamp'></SmallSell>
        )} />

        </SafeAreaView>





    </View>
    
  )

}


const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },


    buttonView:{
        marginTop: 20,
        width: '90%',
        justifyContent: 'flex-start'
    },

    boxContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'flex-start',
        borderWidth: 3,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius:20,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemName: {
        fontWeight: 'bold'
    },
    starcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})