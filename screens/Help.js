import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Help({ navigation }) {

    return (
        <View style={{ flex: 1, padding: 20}}>
            {/* Display the fields of the received movie object. */}
            <Text>For help</Text>
        </View>
    );
}
