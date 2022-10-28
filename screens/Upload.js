import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImageTemp from "../assets/UploadImageTemp.png"
import blank from "../assets/black.png"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// TODO: item object push to database

global.control = 0;

export default function Upload() {
  const [selectedImage, setSelectedImage] = React.useState(UploadImageTemp);
	const [defaultImage, setDefaultImage] = React.useState(UploadImageTemp);

	//Object submitData =  {
		const [itemName, setItemName] = React.useState(null);
		const [itemPrice, setItemPrice] = React.useState(null);
		const [itemDescription, setItemDescription] = React.useState(null);
	//}
	
	if (control === 0) {
		setDefaultImage(UploadImageTemp);
		control = 1;
	}

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

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
		<View>
      <TouchableOpacity onPress={openImagePickerAsync}>
				<Image source={defaultImage} style={styles.defaultImage}/>
				<Image source={{uri: selectedImage.localUri}}
					style={styles.image}/>
      </TouchableOpacity>

			<Text style={styles.firstHeading}>Item Name</Text>
				<TextInput style={styles.typeInput}
					placeholder = "Name..."
					onChangeText={newText => setItemName(newText)}>
			</TextInput>
			{console.log("\n" + itemName)}

			<Text style={styles.heading}>Price</Text>
				<TextInput style={styles.typeInput}
					placeholder = "Price..."
					onChangeText={newText => setItemPrice(newText)}>
			</TextInput>
			{console.log(itemPrice)}

			<Text style={styles.heading}>Description</Text>
					<TextInput style={styles.typeInput}
						placeholder = "Description..." multiline={true}
						onChangeText={newText => setItemDescription(newText)}>
			</TextInput>
			{console.log(itemDescription)}

			{/* Code to Implement Categories */}
			<Text style={styles.heading}>Category</Text>
          <View style={styles.IconsRawsContainer}>
          <View style={styles.buttonraw}>

            <TouchableOpacity style={styles.buttonView} onPress ={() => console.log("Lamp Icon Pressed!")} >
              <Icon name="floor-lamp" size={50} color="#000" />
              <Text style={styles.icontext}>lamp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress ={() => console.log("Chair Icon Pressed!")}>
              <Icon name="chair-rolling" size={50} color="#000" />
              <Text style={styles.icontext}>chair</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonView} onPress ={() => console.log("Desk Icon Pressed!")}>
              <Icon name="table-furniture" size={50} color="#000" />
              <Text style={styles.icontext}>Desk</Text>
            </TouchableOpacity>
						</View>
						</View>
          </View>

          <View style={styles.buttonraw}>

            <TouchableOpacity style={styles.buttonView} onPress ={() => console.log("Electronics Icon Pressed!")}>
              <Icon name="tablet-android" size={50} color="#000" />
              <Text style={styles.icontext}>electronics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress ={() => console.log("Laptop Icon Pressed!")}>
              <Icon name="laptop" size={50} color="#000" />
              <Text style={styles.icontext}>laptop and computer</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonView} onPress ={() => console.log("Sofa Icon Pressed!")}>
              <Icon name="sofa" size={50} color="#000" />
              <Text style={styles.icontext}>sofa</Text>
            </TouchableOpacity>

          </View>


          <View style={styles.buttonraw}>

            <TouchableOpacity style={styles.buttonView} onPress ={() => console.log("Other Icon Pressed!")}>
              <Icon name="dots-horizontal-circle" size={50} color="#000" />
              <Text style={styles.icontext}>etc</Text>
            </TouchableOpacity>


			</View>

			<Text></Text>
			<TouchableOpacity onPress={() => null} style={styles.button}>
      	<Text style={styles.buttonText}> Submit</Text>
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
	},
	heading: {
		padding: 10,
		paddingLeft: 20,
		fontSize: 16,
		fontWeight: "bold",
	},
	typeInput: {
		fontSize: 18,
		paddingLeft: 20,
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
		borderRadius: 5,
	},
	buttonText: {
		paddingLeft: 130,
		alignItems: "center",
		justifyContent: "center",
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
    justifyContent: 'space-around'
  },
})