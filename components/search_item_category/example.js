import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet ,ScrollView,SafeAreaView, FlatList} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategorySell from '../CategorySell';
import SearchBar from '../SearchBar';
import Items from '../../data/item';
import Sell from '../Sell';


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



    <View style = {styles.background}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />



      <SafeAreaView style={styles.container}>
        <FlatList data={Items} renderItem={({item}) => (
          <CategorySell id={item.id} name={item.name} price={item.price} description={item.description} category={item.category}></CategorySell>)}
          />
      </SafeAreaView>
      
      </View>


  )

}


const styles = StyleSheet.create({
  background: {

        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: "#121212",
      
  },

    container: {
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 50,
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