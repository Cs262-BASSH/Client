import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Header({ navigation }) {
  return (
		<View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
          <Text style={styles.title}>Sell</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
  	padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
})