import Sell from '../components/Sell';
import { useDispatch, useSelector } from 'react-redux';
import Items from '../data/item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

const Bookmark = () => {
  const [loading, setLoading] = useState(true);
  const bookmark = useSelector((state) => state.bookmark);

  //const [bookmarkItems, setBookmarkItems] = useState([]);
  //const dispatch = useDispatch();

  // const getBookmark = async () => {
  //   try {
  //     const response = await AsyncStorage.getItem("@bookmark_key");
  //     setBookmarkItems(JSON.parse(response));
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  useFocusEffect(
    useCallback(() => {
      console.log("item placed!");
      //getBookmark();
      setLoading(false);
    }, [])
  );

  return(
    <View style={styles.container}>
      {loading ? <ActivityIndicator style={styles.activityIndicator}/> :
        (
          <ScrollView>
            {
              bookmark.map((item) => (
                <Sell
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                  contact={item.contact}
                />
              ))
            }
          </ScrollView>
        )
      }
    </View>
  )
}

export default Bookmark;

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },

  activityIndicator: {
    // loading screen in middle
  },
})
