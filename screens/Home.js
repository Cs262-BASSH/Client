import Tabs from './Tabs';
import Details from '../screens/Details';

import React from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){
    const Stack = createNativeStackNavigator();

    const detailStyle = () => ({
        headerTitleStyle: {
            color: "#e4000f",
            fontSize: 10,
        },
        headerStyle: {
            backgroundColor: "#121212",
        },
        headerTintColor: "#e4000f",
        title: "Details",
    })

    return (
    <View style={styles.container}>
        <NavigationContainer>
            <StatusBar barStyle='light-content' hidden={true}/>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
                <Stack.Screen name="Details" component={Details} options={detailStyle}/>
            </Stack.Navigator>
        </NavigationContainer>
                {/* <Image style={styles.logo_container}
        source={require('../assets/logo.png')}
        height={50}
        width={50}/> */}
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