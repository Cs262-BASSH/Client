import Tabs from './Tabs';

import React from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

/* This is the home */


export default function Home(){

    return (
    <View style={styles.container}>
        <NavigationContainer>
            <StatusBar barStyle='light-content' hidden={true}/>
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
        // marginTop: 20, // shows statusbar clearly
    },
})