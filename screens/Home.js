import Tabs from './Tabs';

import React from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';



export default function Home(){

    return (
    <View style={styles.container}>
    <NavigationContainer>
        <StatusBar style="auto"/>
      <Tabs/>
    </NavigationContainer>
    </View>
    );
}

const styles = StyleSheet.create ({
    container : {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'maroon',
    }
})