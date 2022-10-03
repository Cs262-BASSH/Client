import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from './Profile';


export default function Search({ navigation }) {
  const [searchText, setSearchText] = useState();
  return (
    <View style={styles.container}>
      <View>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </View>


      <View>
        <ScrollView style={styles.Iconsview}>

          <View style={styles.buttonraw}>
            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate('Profile')}>
              <Icon name="floor-lamp" size={50} color="#900" />
              <Text style={styles.icontext}>lamp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView}>
              <Icon name="chair-rolling" size={50} color="#900" />
              <Text style={styles.icontext}>chair</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonView}>
              <Icon name="table-furniture" size={50} color="#900" />
              <Text style={styles.icontext}>Desk</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.buttonraw}>

            <TouchableOpacity style={styles.buttonView}>
              <Icon name="tablet-android" size={50} color="#900" />
              <Text style={styles.icontext}>electronics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView}>
              <Icon name="laptop" size={50} color="#900" />
              <Text style={styles.icontext}>laptop and computer</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonView}>
              <Icon name="sofa" size={50} color="#900" />
              <Text style={styles.icontext}>sofa</Text>
            </TouchableOpacity>

          </View>


          <View style={styles.buttonraw}>

            <TouchableOpacity style={styles.buttonView}>
              <Icon name="dots-horizontal-circle" size={50} color="#900" />
              <Text style={styles.icontext}>etc</Text>
            </TouchableOpacity>


          </View>


        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  buttonraw: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  buttonView: {
    width: '25%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },


  icontext: {
    justifyContent: 'center'
  },

  Iconsview: {

  }
})


{/* https://reactnative.dev/docs/image */ }
{/* https://www.prudentdevs.club/btns-imgs-in-react-native */ }