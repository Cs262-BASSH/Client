import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = (props) => {
    return(

    <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
        <TextInput
            style={styles.input}
            placeholder="Search for an Item!"
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
        />
    </View>


        
    )
}

export default SearchBar;

const styles = StyleSheet.create({
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


})