import SearchBar from '../components/SearchBar';

import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Example from '../components/search_item_category/example'

function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState();
  return (
    <View style={styles.container}>


      <View>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </View>


      <View>
        <ScrollView style={styles.Iconsview}>
          <View  style={styles.IconsRawsContainer}>
          <View style={styles.buttonraw}>
            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate('Example')}>
              <Icon name="floor-lamp" size={50} color="#000" />
              <Text style={styles.icontext}>lamp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress ={() => navigation.navigate('Example')}>
              <Icon name="chair-rolling" size={50} color="#000" />
              <Text style={styles.icontext}>chair</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonView} onPress ={() => navigation.navigate('Example')}>
              <Icon name="table-furniture" size={50} color="#000" />
              <Text style={styles.icontext}>Desk</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.buttonraw}>

            <TouchableOpacity style={styles.buttonView} onPress ={() => navigation.navigate('Example')}>
              <Icon name="tablet-android" size={50} color="#000" />
              <Text style={styles.icontext}>electronics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress ={() => navigation.navigate('Example')}>
              <Icon name="laptop" size={50} color="#000" />
              <Text style={styles.icontext}>laptop and computer</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonView} onPress ={() => navigation.navigate('Example')}>
              <Icon name="sofa" size={50} color="#000" />
              <Text style={styles.icontext}>sofa</Text>
            </TouchableOpacity>

          </View>


          <View style={styles.buttonraw}>

            <TouchableOpacity style={styles.buttonView} onPress ={() => navigation.navigate('Example')}>
              <Icon name="dots-horizontal-circle" size={50} color="#000" />
              <Text style={styles.icontext}>etc</Text>
            </TouchableOpacity>


          </View>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function Search() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false, gestureDirection: 'horizontal'} }/>
      <Stack.Screen name="Example" component={Example} options={{ title: "example Item list" , gestureDirection: 'horizontal'}} />
    </Stack.Navigator>
  );
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 40,
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    // alignItems: 'center'
  },
  IconsRawsContainer: {
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  },

  buttonraw: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
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