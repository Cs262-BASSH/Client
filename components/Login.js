import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar'
import { Button, Text, View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function Login({ navigation }) {
  const { height, width } = Dimensions.get("window");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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

  // Check if username and password is in database
  const checkLogin = () => {
    // If username and password matches in database, user logins to homepage
    if ((users.some(obj => obj.name === name)) && (users.some(obj => obj.password === password))) {
      navigation.navigate('Tabs');
    }

    // Fail/retry
    else {
      Alert.alert(
        "Woops!",
        "Username or password does not seem to match! Please try again.",
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
      <View style={styles.bandTop}>
        {/* <Image source={require('../assets/KNIGHTS.png')} height={100} width={100}/> */}
      </View>
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

        <Text></Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => checkLogin()}>
            <Text style={styles.buttonText}> Submit</Text>
          </TouchableOpacity>
        </View>
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
  center: {
    flex: 2,
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 30,
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