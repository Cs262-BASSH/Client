import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = (props) => {
    return(
        <View style={styles.searchBarContainer}>
        <ScrollView>
        <View style={styles.container}>
            <TextInput 
            placeholder="Search" 
            style={styles.input}
            value={props.searcText}
            onChangeText={(text)=>props.setSearchText(text)}
            />
        </View>
        <View style={styles.sortBtn}>
            <Icon name="tune" color='white' size={35}></Icon>
        </View>
        </ScrollView>
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBarContainer: {
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    container: {
        margin: 10,
        backgroundColor: '#CBCCC3',
        borderRadius: 10,
        marginRight: 60,
    },
    input : {
        padding: 10,
        borderRadius: 10,
        color: '#000',
        borderWidth: 1,
    },
    sortBtn : {

        backgroundColor: 'black',
        height: 35,
        width: 35,
        borderRadius: 10,
        marginTop: -46,
        marginLeft: 310,
        
    }
})