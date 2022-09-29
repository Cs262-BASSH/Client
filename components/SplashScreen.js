import React from 'react';
import { View, Animated, Image, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//Logo
import Logo from '../assets/knight.png';

export default function SplashScreen(){
    const edges = useSafeAreaInsets();

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'red',
        }}>

            <Animated.View>
                <Image source={Logo} style={{
                    width: 400,
                    height: 400,
                    marginTop: 100,
                }}></Image>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'white',
                    marginLeft: 100,
                }}>Knight Market</Text>
            </Animated.View>
        </View>
    );
}