import Items from '../../data/items'
import CategorySell from '../CategorySell';
import Sell from '../Sell';

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native';
import { useState } from 'react';

// TODO: Add Image

export default function Example() {
    const [searchText, setSearchText] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Items}
                renderItem={({item, index}) => (
                    <Sell id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.category} item={Items[index]}></Sell>)}
            />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: "#121212"
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