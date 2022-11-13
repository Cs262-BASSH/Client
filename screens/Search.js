// import SearchBar from '../components/SearchBar';
import Example from '../components/search_item_category/examples';

import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SearchBar } from '@rneui/themed';

/*
TODO: change the header name of category to match it's respective name
Fix:
-scroll is only halfway
*/

function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState();

  return (
    <View style={styles.container}>
      <SearchBar />
      <View>
        <ScrollView style={styles.Iconsview}>
          <View style={styles.IconsRawsContainer}>
            <View style={styles.buttonraw}>
              <TouchableOpacity style={styles.buttonView} onPress={() => { navigation.navigate('Example') }}>
                <Icon name="floor-lamp" size={50} color="white" />
                <Text style={styles.icontext}>Lamp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} >
                <Icon name="chair-rolling" size={50} color="white" />
                <Text style={styles.icontext}>Chair</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} >
                <Icon name="table-furniture" size={50} color="white" />
                <Text style={styles.icontext}>Desk</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonraw}>
              <TouchableOpacity style={styles.buttonView} >
                <Icon name="tablet-android" size={50} color="white" />
                <Text style={styles.icontext}>Electronics</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} >
                <Icon name="laptop" size={50} color="white" />
                <Text style={styles.icontext}>Laptop and Computer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView} >
                <Icon name="sofa" size={50} color="white" />
                <Text style={styles.icontext}>Sofa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonraw}>
              <TouchableOpacity style={styles.buttonView} >
                <Icon name="dots-horizontal-circle" size={50} color="white" />
                <Text style={styles.icontext}>Etc</Text>
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

  const searchPageHeader = ({ }) => ({
    headerTitle: 'Search',
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  const categoryHeader = ({ }) => ({
    headerTitle: 'Example',
    headerTintColor: 'red',
    tabBarBadge: 4,
    headerStyle: { backgroundColor: "#121212" },
    headerTitleAlign: 'center'
  })

  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={searchPageHeader} />
      <Stack.Screen name="Example" component={Example} options={categoryHeader} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
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
    justifyContent: 'center',
    color: 'white'
  },

  Iconsview: {

  }
})

{/* https://reactnative.dev/docs/image */ }
{/* https://www.prudentdevs.club/btns-imgs-in-react-native */ }