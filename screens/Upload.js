import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImageTemp from "../assets/UploadImageTemp.png"

export default function Upload() {
  const [selectedImage, setSelectedImage] = React.useState(UploadImageTemp);

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
		};

  return (
    <View>
      <TouchableOpacity onPress={openImagePickerAsync}>
				<Image source={UploadImageTemp} style={styles.defautlImage}/>
				<Image source={{uri: selectedImage.localUri}} 
				style={styles.image}/>

      </TouchableOpacity>

			<Text style={styles.heading}>Item Name</Text>
			<TextInput style={styles.typeInput}
			placeholder = "Name...">
			</TextInput>

			<Text style={styles.heading}>Price</Text>
			<TextInput style={styles.typeInput}
			placeholder = "Price...">
			</TextInput>

			<Text style={styles.heading}>Description</Text>
			<TextInput style={styles.typeInput}
			placeholder = "Description...">
			</TextInput>

			<Text style={styles.heading}>(Submit button currently does nothing...)</Text>
			
			<TouchableOpacity onPress={() => null} style={styles.button}>
      	<Text style={styles.buttonText}> Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  defautlImage: {
		width: 375,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
		position: "absolute",
	},
	image: {
    width: 375,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
	heading: {
		padding: 10,
		paddingLeft: 20,
		fontSize: 16,
		fontWeight: "bold",
	},
	typeInput: {
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
		marginTop: 130,
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