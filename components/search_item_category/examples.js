import Items from '../../data/item'
import SearchBar from '../SearchBar';
import Sell from '../Sell'

import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native';
import { useState } from 'react';

export default function Example() {
    const [searchText, setSearchText] = useState();

    return (
        <View style = {styles.background}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <SafeAreaView style={styles.container}>
                <FlatList data={Items} renderItem={({item, index}) => (
                    <Sell id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.category} item={Items[index]}></Sell>
                )}/>
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
    },
})