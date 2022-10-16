import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImageTemp from "../assets/UploadImageTemp.png"
import blank from "../assets/black.png"

global.control = 0;

export default function Upload() {
  const [selectedImage, setSelectedImage] = React.useState(UploadImageTemp);
	const [defaultImage, setDefaultImage] = React.useState(UploadImageTemp);
	
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
    <ScrollView>
		<View>
      <TouchableOpacity onPress={openImagePickerAsync}>
				<Image source={defaultImage} style={styles.defaultImage}/>
				<Image source={{uri: selectedImage.localUri}}
					style={styles.image}/>
      </TouchableOpacity>

			<Text style={styles.firstHeading}>Item Name</Text>
				<TextInput style={styles.typeInput}
					placeholder = "Name...">
			</TextInput>

			<Text style={styles.heading}>Price</Text>
				<TextInput style={styles.typeInput}
					placeholder = "Price...">
			</TextInput>

			<Text style={styles.heading}>Description</Text>
					<TextInput style={styles.typeInput}
						placeholder = "Description..." multiline={true}>
			</TextInput>

			<Text></Text>
			<TouchableOpacity onPress={() => null} style={styles.button}>
      	<Text style={styles.buttonText}> Submit</Text>
      </TouchableOpacity>
		</View>
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
		backgroundColor: "maroon",
		padding: 15,
		borderRadius: 5,
	},
	buttonText: {
		paddingLeft: 130,
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
		color: "white",
		fontSize: 20,
	},
})