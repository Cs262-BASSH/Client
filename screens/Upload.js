import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImageTemp from "../assets/UploadImageTemp.png"
import blank from "../assets/black.png"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToSalesHistory } from '../components/redux/reducer/historySlice';

global.control = 0;

export default function Upload() {
  const [selectedImage, setSelectedImage] = React.useState(UploadImageTemp);
  const [defaultImage, setDefaultImage] = React.useState(UploadImageTemp);

  //Object submitData =  {
  const [itemID, setitemID] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [itemPrice, setItemPrice] = React.useState("");
  const [itemDescription, setItemDescription] = React.useState("");
  const [itemCategory, setItemCategory] = React.useState("");
  const [sellerContact, setSellerContact] = useState("")
  const [color, setColor] = React.useState(false);
  const [color2, setColor2] = React.useState(false);
  const [color3, setColor3] = React.useState(false);
  const [color4, setColor4] = React.useState(false);
  const [color5, setColor5] = React.useState(false);
  const [color6, setColor6] = React.useState(false);
  const [color7, setColor7] = React.useState(false);

  // todo: unique key id, image, contacts
  // Item to be written to database
  const newItem = {
    id: itemID,
    name: itemName,
    price: itemPrice,
    description: itemDescription,
    category: itemCategory,
    // image: props.image,
    // contact: props.contact
  };

  const dispatch = useDispatch();

  // Lamp category
  const toggle = function () {
    if (color) {
      setColor(false);
    } else {
      setItemCategory(1);
      setColor(true);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(false);
    }
  };

  // Chair category
  const toggle2 = function () {
    if (color2) {
      setColor2(false);
    } else {
      setItemCategory(2);
      setColor(false);
      setColor2(true);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(false);
    }
  };

  // Desk category
  const toggle3 = function () {
    if (color3) {
      setColor3(false);
    } else {
      setItemCategory(3);
      setColor(false);
      setColor2(false);
      setColor3(true);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(false);
    }
  };

  // Electronics category
  const toggle4 = function () {
    if (color4) {
      setColor4(false);
    } else {
      setItemCategory(4);
      setColor(false);
      setColor2(false);
      setColor3(false);
      setColor4(true);
      setColor5(false);
      setColor6(false);
      setColor7(false);
    }
  };

  // Laptop and Computer category
  const toggle5 = function () {
    if (color5) {
      setColor5(false);
    } else {
      setItemCategory(5);
      setColor(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(true);
      setColor6(false);
      setColor7(false);
    }
  };

  // Sofa category
  const toggle6 = function () {
    if (color6) {
      setColor6(false);
    } else {
      setItemCategory(6);
      setColor(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(true);
      setColor7(false);
    }
  };

  // Other category
  const toggle7 = function () {
    if (color7) {
      setColor7(false);
    } else {
      setItemCategory(7);
      setColor(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
      setColor5(false);
      setColor6(false);
      setColor7(true);
    }
  };

  //}

  if (control === 0) {
    setDefaultImage(UploadImageTemp);
    control = 1;
  }

  // Alert.alert(
  //   title,
  //   msg,
  //   [
  //     {
  //       text: "Cancel",
  //       style: "cancel"
  //     },
  //     {
  //       text: "Confirm",
  //       onPress: () => {
  //         let pickerResult = ImagePicker.launchImageLibraryAsync();

  //         setSelectedImage({ localUri: pickerResult.uri });
  //         setDefaultImage(blank);
  //       }
  //     }
  //   ]
  // );}

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
    setDefaultImage(blank);
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userid": 1, // todo
      "name": newItem.name,
      "time": new Date(),
      "categorynum": itemCategory,
      "price": newItem.price,
      "description": newItem.description,
      "imageurl": ""
    })
  };

  const uploadItem = async () => {
    // Post Request to database
    try {
      await fetch("https://quiet-oasis-96937.herokuapp.com/useritem", requestOptions)
        .then(response => response.json()) // response.text()?
        .then((responseData) => {

          const item1 = responseData.id;
          // todo: Wonder why but it is not updating id
          setitemID(JSON.stringify(item1)); // setitemID(item1.toString());

          console.log(
            "POST Response:",
            `Response Body -> ${responseData + item1} ${newItem.name} ${newItem.id};`
            // "Response Body -> " + responseData + item1 + "         " + newItem.name + "         " + newItem.id + ";"
          )
          console.log("Successfully written to database.");
        })
    }
    catch (error) {
      console.error(error);
    }

    // Use redux to push item temporarily to user sales history
    dispatch(addToSalesHistory(newItem));

    // todo: toast to tell item has been uploaded

    // Reset value and refresh page
    setItemName("");
    setItemPrice("");
    setItemDescription("");
    setItemCategory("");
  }

  return (

    <ScrollView automaticallyAdjustKeyboardInsets={true} backgroundColor={"#121212"}>
      <View>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Image source={defaultImage} style={styles.defaultImage} />
          <Image source={{ uri: selectedImage.localUri }}
            style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.firstHeading}>Item Name</Text>
        <TextInput style={styles.typeInput}
          placeholder="Name..."
          onChangeText={newText => { setItemName(newText) }}>
        </TextInput>
        {console.log(itemName)}
        <Text style={styles.heading}>Price</Text>
        <TextInput style={styles.typeInput}
          keyboardType="numeric"
          placeholder="Price..."
          onChangeText={newText => setItemPrice(newText)}>
        </TextInput>
        {console.log(itemPrice)}
        <Text style={styles.heading}>Description</Text>
        <TextInput style={styles.typeInput}
          placeholder="Description..." multiline={true}
          onChangeText={newText => setItemDescription(newText)}>
        </TextInput>
        {console.log(itemDescription)}

        {/* Code to Implement Categories */}
        <Text style={styles.heading}>Category</Text>
        <View style={styles.IconsRawsContainer}>
          <View style={styles.buttonraw}>
            <TouchableOpacity style={styles.buttonView} onPress={toggle}>
              <Icon name="floor-lamp" size={50} style={{ color: color ? "red" : "white" }} />
              <Text style={styles.icontext}>Lamp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonView} onPress={toggle2}>
              <Icon name="chair-rolling" size={50} style={{ color: color2 ? "red" : "white" }} />
              <Text style={styles.icontext}>Chair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonView} onPress={toggle3}>
              <Icon name="table-furniture" size={50} style={{ color: color3 ? "red" : "white" }} />
              <Text style={styles.icontext}>Desk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.buttonraw}>
        <TouchableOpacity style={styles.buttonView} onPress={toggle4}>
          <Icon name="tablet-android" size={50} style={{ color: color4 ? "red" : "white" }} />
          <Text style={styles.icontext}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonView} onPress={toggle5}>
          <Icon name="laptop" size={50} style={{ color: color5 ? "red" : "white" }} />
          <Text style={styles.icontext}>Laptop and Computer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonView} onPress={toggle6}>
          <Icon name="sofa" size={50} style={{ color: color6 ? "red" : "white" }} />
          <Text style={styles.icontext}>Sofa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonraw}>
        <TouchableOpacity style={styles.buttonView} onPress={toggle7}>
          <Icon name="dots-horizontal-circle" size={50} style={{ color: color7 ? "red" : "white" }} />
          <Text style={styles.icontext}>Other</Text>
        </TouchableOpacity>
      </View>
      {console.log(itemCategory)}
      <TouchableOpacity onPress={() => uploadItem()} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  defaultImage: {
    width: "100%",
    height: 300,
    position: "absolute",
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },

  firstHeading: {
    padding: 10,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  heading: {
    padding: 10,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  typeInput: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    marginRight: 20,
    marginLeft: 20,
  },

  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 10,
  },

  buttonText: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
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
    justifyContent: 'space-around',
  },
  icontext: {
    color: "white",
  }
})