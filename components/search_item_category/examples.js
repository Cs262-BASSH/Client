import Items from '../../data/items'
import CategorySell from '../CategorySell';
import SearchBar from '../SearchBar';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { useState } from 'react';

// TODO: Add Image

export default function Example() {
    const [searchText, setSearchText] = useState();

    return (
        <View style={{ flex: 1, margintop: 50, marginLeft: 10 }}>
            <View>
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
            </View>




            <SafeAreaView style={{ flex: 1 }}>


                <FlatList data={Items} renderItem={({ item }) => (
                    <CategorySell item={item.name} price={item.price} description={item.description}></CategorySell>
                )} />

            </SafeAreaView>





        </View>
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

    buttonView: {
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
        borderTopLeftRadius: 20,
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