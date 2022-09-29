import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

export default function Search() {
    const [searchText, setSearchText] = useState();
  return (
    <View style={styles.container}>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      <Text> Search page</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        backgroundColor: '#FFF',
    }
})