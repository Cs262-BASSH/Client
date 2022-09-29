import {View, TextInput, Text, StyleSheet} from 'react-native';
import React from 'react';

const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder="Search" 
            style={styles.input}
            value={props.searcText}
            onChangeText={(text)=>props.setSearchText(text)}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#CBCCC3',
        borderRadius: 10,
    },
    input : {
        padding: 10,
        borderRadius: 10,
        color: '#000',
        borderWidth: 1,
    }
})