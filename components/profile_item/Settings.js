import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, TouchableOpacity, Button, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const createTwoButtonAlert = () =>
    Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const aboutInfo = () =>
  Alert.alert('KNIGHT MARKET', 'This is an app where you can view items, speak with sellers and negotiate prices for items you want to buy')
  
  const helpInfo = () =>
  Alert.alert('For help:', 'Email bee6@calvin.edu')

  return (
    <View style={styles.container}>
      <View style={styles.item}>
      <TouchableOpacity onPress={aboutInfo}>
      <Text style={styles.item}>About    <Icon name="ios-information-circle" size={20}/></Text>
      </TouchableOpacity>
      <Text style={styles.item}>Notifications   <Icon name="ios-notifications" size={20}/></Text>
      <Switch style={{marginLeft: 200, marginTop: -65}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text></Text><Text></Text>
      <Text style={styles.item}>Password and Security   <Icon name="ios-finger-print" size={20}/></Text>
      <TouchableOpacity onPress={helpInfo}>
      <Text style={styles.item}>Help    <Icon name="ios-help" size={20}/></Text>
      </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
      <View>
        <Text style={{width: 60, textAlign: 'center', color: 'white'}}>Danger Zone</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
      
      </View>
      <Text></Text>
      <View style={{ backgroundColor: 'tomato', padding: 10, borderRadius: 15,  }}>
        <Button title={'Delete Account'} color='black' onPress={createTwoButtonAlert}/>
        
      </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
    backgroundColor: 'black',
  },
  item: {
    fontSize: 15,
    padding: 20,
    marginBottom: 15,
    backgroundColor: 'beige',
    borderRadius: 20,
  }
});

export default Settings;
