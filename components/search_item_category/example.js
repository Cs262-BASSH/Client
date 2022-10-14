import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet ,ScrollView} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallSell from '../smallSell';
import SearchBar from '../SearchBar';

export default function Example() {
    const [searchText, setSearchText] = useState();   
  return (


    <View style={{ flex: 1, margintop: 50, marginLeft: 10 }}>
        <View>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </View>


        <ScrollView> 


        <SmallSell></SmallSell>
        <SmallSell></SmallSell>
        <SmallSell></SmallSell>
        <SmallSell></SmallSell>
        <SmallSell></SmallSell>
        <SmallSell></SmallSell>



         </ScrollView>
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