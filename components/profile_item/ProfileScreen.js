import React from 'react';
import Settings from './Settings';
import History from './History';
import Likes from './Likes';
import SavedItems from './SavedItems';
import * as ImagePicker from 'expo-image-picker';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native';

function ProfileScreen({ navigation }) {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };


  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <View style={styles.upPart}>

            <TouchableOpacity onPress={openImagePickerAsync}>
              <View>
                <Image source={{ uri: selectedImage.localUri }} style={styles.img} />
              </View>
            </TouchableOpacity>

            <View style={styles.upPartTextView}>
              <Text style={styles.upPartText}>Name:</Text>
              <Text style={styles.upPartText}>ID:</Text>
            </View>

          </View>

          <View style={styles.itemsList}>
            {/* Touch Event */}
            <TouchableOpacity>
              <Text style={styles.items} onPress={() => navigation.navigate('Settings')}>Setting</Text>
              <Text style={styles.items} onPress={() => navigation.navigate('History')}>Sales List</Text>
              <Text style={styles.items} onPress={() => navigation.navigate('Likes')}>Likes</Text>
              <Text style={styles.items} onPress={() => navigation.navigate('Saved Items')}>Saved Items</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>

        <View style={styles.upPart}>
          <TouchableOpacity onPress={openImagePickerAsync}>
            <View>
              <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.img} />
            </View>
          </TouchableOpacity>

          <View style={styles.upPartTextView}>
            <Text style={styles.upPartText}>Name:</Text>
            <Text style={styles.upPartText}>ID:</Text>
          </View>
        </View>

        <View style={styles.itemsList}>

          {/* Touch Event */}
          <TouchableOpacity>
            <Text style={styles.items} onPress={() => navigation.navigate('Settings')}>Setting</Text>
            <Text style={styles.items} onPress={() => navigation.navigate('History')}>Sales List</Text>
            <Text style={styles.items} onPress={() => navigation.navigate('Likes')}>Likes</Text>
            <Text style={styles.items} onPress={() => navigation.navigate('Saved Items')}>Saved Items</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  itemsList: {
    marginTop: 50,
  },
  items: {
    fontSize: 15,
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
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
  img: {
    width: 110,
    height: 110,
    marginTop: 30,
    borderRadius: 60,
    justifyContent: 'center'
  },
  upPart: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  upPartTextView: {
    marginLeft: 25,
    marginTop: 60
  },
  upPartText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});