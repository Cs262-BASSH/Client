import { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'
import { Button, Text, View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons';
import { useFocusEffect } from '@react-navigation/native';

// TODO: add phone number and gmail text input

export default function SignUp({ navigation }) {
  const { height, width } = Dimensions.get("window");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  // Gets username and password and store it in an array or objects
  const getItems = async () => {
    try {
      const response = await fetch("https://quiet-oasis-96937.herokuapp.com/Marketusers");
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Post Request to database
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userid": users.length + 1, // creates an id for the user
      "name": name,
      "email": email,
      "password": password,
      "phonenum": phoneNumber,
    })
  };

  // Post Request to database
  const signUp = async () => {
    try {
      const response = await fetch("https://quiet-oasis-96937.herokuapp.com/Marketusers", requestOptions)
      const json = await response.json();
      console.log("Response Body -> " + json);
      console.log("JSON.stringify(json): " + JSON.stringify(json));
    }
    catch (error) {
      console.error(error);
    }
  }

  // Check if username is not in the database and password matches each other
  const checkSignUp = () => {
    // If username is not in database, user signs up to homepage
    if (users.some(obj => obj.name !== name)) {
      // If password matches each other
      if (password === secondPassword) {
        // If password is at least 4 characters in length
        if (((password.length >= 4) && (secondPassword.length >= 4))) {
          // POST Request
          signUp();

          navigation.navigate('Tabs');
        }

        // Password is not at least 4 characters in length
        else {
          Alert.alert(
            "Woops!",
            "Password must at least be 4 characters in length! Please try again.",
          );
        }
      }

      // Password does not match
      else {
        Alert.alert(
          "Woops!",
          "Password does not seem to match each other! Please try again.",
        );
      }
    }

    // Username has been taken
    else {
      Alert.alert(
        "Woops!",
        "Username has been taken! Please try a different username.",
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      getItems();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.bandTop}></View>
      <View style={styles.center}>
        <Text style={styles.firstHeading}>Username</Text>
        <TextInput style={styles.typeInput}
          placeholder="Name..."
          onChangeText={(name) => { setName(name) }}>
        </TextInput>
        <Text style={styles.heading}>Password</Text>
        <TextInput style={styles.typeInput}
          placeholder="Password..." secureTextEntry="true"
          onChangeText={(password) => { setPassword(password) }}>
        </TextInput>
        <Text style={styles.heading}>Re-enter Password</Text>
        <TextInput style={styles.typeInput}
          placeholder="Password..." secureTextEntry="true"
          onChangeText={(password) => { setSecondPassword(password) }}>
        </TextInput>
        <Text></Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => checkSignUp()}>
            <Text style={styles.buttonText}> Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bandBottom}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 2,
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
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
