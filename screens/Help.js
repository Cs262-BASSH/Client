import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Help({ navigation }) {

    return (
        <View style={styles.container}>
            {/* Display the fields of the received movie object. */}
            <Text style={styles.title}>For help</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'black',
    flex: 1,
    },
    title: {
        padding: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
  })
