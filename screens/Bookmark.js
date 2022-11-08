import Sell from '../components/Sell';
import { removeFromBookmark } from '../components/redux/reducer/bookmarkItems';
import { useDispatch, useSelector } from 'react-redux';
import Items from '../data/item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

const Bookmark = () => {
  const [loading, setLoading] = useState(true);
  const [bookmarkItems, setBookmarkItems] = useState([]);

  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmark);

  const getBookmark = async () => {
    try {
      const response = await AsyncStorage.getItem("@bookmark_key");
      setBookmarkItems(JSON.parse(response));
    }
    catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      console.log("item placed!");
      getBookmark();
      setLoading(false);
    }, [])
  );

  return(
    <View style={styles.container}>
      {loading ? <ActivityIndicator style={styles.activityIndicator}/> :
        (
          <View>
            <ScrollView>
              {
                Items.map((item) => (
                  <Sell
                    key={item.id}
                    item={item}
                    {...item}
                  />
                ))
              }
            </ScrollView>
          </View>
        )
      }

{/*          (
          <View>
            <ScrollView>
              {
                //Object.keys(bookmarkItems)
                bookmarkItems.map((item) =>
                  <TouchableOpacity key={item}>
                    <Sell id={item.id} name={bookmarkItems[item]} price={bookmarkItems[item]} description={bookmarkItems[item]} category={bookmarkItems[item]} />
                  </TouchableOpacity>
                )
              }
            </ScrollView>
          </View>
        ) */}
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
