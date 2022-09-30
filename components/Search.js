import React, {useState} from 'react';
import { Text, View, StyleSheet , ScrollView} from 'react-native';
import SearchBar from './SearchBar';

export default function Search() {
    const [searchText, setSearchText] = useState();
  return (
    <View style={styles.container}>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      <Text> Search page</Text>

      <ScrollView> 
        <View>

          {/* 4 categories in a raw */}

          <View style={styles.buttonView}>
          {/* https://reactnative.dev/docs/image */}

          </View>
           
            
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        backgroundColor: '#FFF',
    },

    buttonView: {
    width: '25%',
    padding: 5,
    }
})