// import Login from './components/Login';
// import SignIn from './components/SignIn';

import {  StyleSheet } from "react-native";

import Home from "./screens/Home";

/* sell, search, buy */
export default function App() {

  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
