import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Text, View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons';
import Home from '../screens/Home';

export default function Login() {
  const {height, width} = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View style={styles.bandTop}>
              {/* <Image source={require('../assets/KNIGHTS.png')} height={100} width={100}/> */}
      </View>
      <View style={styles.center}>
        <Text style={styles.firstHeading}>Username</Text>
          <TextInput style={styles.typeInput}
            placeholder = "Name...">
          </TextInput>

        <Text style={styles.heading}>Password</Text>
          <TextInput style={styles.typeInput}
            placeholder = "Password..." secureTextEntry="true">
        </TextInput>

        <Text></Text>
        <TouchableOpacity onPress={() => null} style={styles.button}>
          <Text style={styles.buttonText}> Log In </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bandBottom}>
              {/* <Image source={require('../assets/KNIGHTS.png')} height={100} width={100}/> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center : {
    flex: 2,
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal : 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bandTop: {
    flex: 1,
    backgroundColor: 'black',
  },
  bandBottom: {
    flex: 1,
    backgroundColor: 'black',
  },
	firstHeading: {
		padding: 5,
		fontSize: 16,
		fontWeight: "bold",
	},
	heading: {
		padding: 5,
		fontSize: 16,
		fontWeight: "bold",
	},
	typeInput: {
		fontSize: 18,
		padding: 10,
		backgroundColor: 'beige',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "black",
		marginRight: 20,
		marginLeft: 20,
	},
	button: {
		backgroundColor: "black",
    padding: 20,
		borderRadius: 15,
	},
	buttonText: {
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
		color: "white",
		fontSize: 20,
	},
});