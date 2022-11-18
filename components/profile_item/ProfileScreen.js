import React from 'react';
import Settings from './Settings';
import History from './History';
import Likes from './Likes';
import SavedItems from './SavedItems';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
              <Text style={styles.upPartText}>Name: (User Name)</Text>
              <Text style={styles.upPartText}>ID: (User ID)</Text>
            </View>

          </View>

          <View style={styles.itemsList}>

            {/* Touch Event */}
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <View style={styles.itemTabs}>
                <View style={styles.icons}><Ionicons name="settings" size={30} color="#0066ff" /></View>
                <Text style={styles.items} >
                  Setting{"\n"}
                  <Text style={styles.secondery}>Notification · Password · Help</Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('History')}>
              <View style={styles.itemTabs}>
                <View style={styles.icons}><Ionicons name="document-text" size={30} color="#a4de02" /></View>
                <Text style={styles.items} >
                  Sales History{"\n"}
                  <Text style={styles.secondery}>List of Your Sales</Text>
                </Text>
              </View>
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
              <Image source={{ uri: 'https://waetag.com/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png' }} style={styles.img} />
            </View>
          </TouchableOpacity>

          <View style={styles.upPartTextView}>
            <Text style={styles.upPartText}>Name: (User Name)</Text>
            <Text style={styles.upPartText}>ID: (User ID)</Text>
          </View>
        </View>

        <View style={styles.itemsList}>

          {/* Touch Event */}
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={styles.itemTabs}>
              <View style={styles.icons}><Ionicons name="settings" size={30} color="#0066ff" /></View>
              <Text style={styles.items} >
                Setting{"\n"}
                <Text style={styles.secondery}>Notification · Password · Help</Text>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('History')}>

            <View style={styles.itemTabs}>
              <View style={styles.icons}><Ionicons name="document-text" size={30} color="#a4de02" /></View>
              <Text style={styles.items} >
                Sales History{"\n"}
                <Text style={styles.secondery}>List of Your Sales</Text>
              </Text>
            </View>
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
    // flexDirection: 'row',
    fontSize: 18,
    marginLeft: 10

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
    width: 130,
    height: 130,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: 'center'
  },
  upPart: {
    // flexDirection: 'row',
    alignItems: 'center'
  },
  upPartTextView: {
    alignItems: "center",
    marginTop: 20,
    // marginBottom: 10
  },
  upPartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white"
  },
  itemTabs: {
    flexDirection: 'row',
    fontSize: 17,
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: "center"
  },
  icons: {
    justifyContent: "center"
  },
  secondery: {
    color: "grey",
    fontSize: 13
  }
});