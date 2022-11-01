import Tabs from './Tabs';

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

/* This is the home */


export default function Home() {

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <StatusBar barStyle='light-content' hidden={true} />
                <Tabs />
            </NavigationContainer>
            {/* <Image style={styles.logo_container}
        source={require('../assets/logo.png')}
        height={50}
        width={50}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // marginTop: 20, // shows statusbar clearly
    },
    logo_container: {
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: -5,
        position: 'absolute',
    }
})