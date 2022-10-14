import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, View, Dimensions, Text, StyleSheet } from 'react-native'

export default function Login() {
  return (
    <View>
      <Button title='Login In'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
  }
});