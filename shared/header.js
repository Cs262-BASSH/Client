import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Header({ navigation }) {
  return (
		<View>
      <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
          <Text style={styles.title}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
  	padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
})