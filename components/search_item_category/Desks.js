import Sell from '../Sell'
import { View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

/**Display items in category desk */
export default function Desk({ route, navigation }) {
    const [search, setSearch] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getItems = async () => {
        try {
            const response = await fetch("https://quiet-oasis-96937.herokuapp.com/useritem/category/3");
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <Sell id={item.id} name={item.name} price={item.price} description={item.description} image={item.imageurl} category={item.categorynum}></Sell>
                        )}
                    />
                )}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: "#121212",
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 10,
        height: 40,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#f5f5f5',
        color: '#424242',
        borderRadius: 20,
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
    },
})