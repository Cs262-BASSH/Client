import Settings from '../components/profile_item/Settings';
import History from '../components/profile_item/History';
import Likes from '../components/profile_item/Likes';
import SavedItems from '../components/profile_item/SavedItems';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native';

function ProfileScreen({ navigation }) {


  return (

    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> -User screen</Text>
        <View style={styles.itemsList}>

          {/* Touch Event */}
          <TouchableOpacity>
            <Text style={styles.items} onPress={() => navigation.navigate('Settings')}>Setting</Text>
            <Text style={styles.items} onPress={() => navigation.navigate('History')}>History</Text>
            <Text style={styles.items} onPress={() => navigation.navigate('Likes')}>Likes</Text>
            <Text style={styles.items} onPress={() => navigation.navigate('Saved Items')}>Saved Items</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>

  );

}

const Stack = createNativeStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile." component={ProfileScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Saved Items" component={SavedItems} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemsList: {
    marginTop: 130,

  },
  items: {
    fontSize: 15,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});