import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
      <Text style={styles.item}>About</Text>
      <Text style={styles.item}>Notifications</Text>
      <Switch style={{marginLeft: 150, marginTop: -5}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Text style={styles.item}>Password and Security</Text>
      <Text style={styles.item}>Payments</Text>
      <Text style={styles.item}>Help</Text></View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
        <Text style={{width: 60, textAlign: 'center'}}>Danger Zone</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <TouchableOpacity
        onPress={() => alert('If you delete this, your account cannot be recovered')}
        style={{ backgroundColor: 'grey', padding: 20, borderRadius: 15,  }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "right",
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
  },
  item: {
    fontSize: 15,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
  }
});

export default Settings;
