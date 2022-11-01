import Sell from '../components/Sell';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

export default function Bookmark() {
  const [loading, setLoading] = useState(true);
  const [bookmarkItems, setBookmarkItems] = useState([]);

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
                //Object.keys(bookmarkItems)
                bookmarkItems.map((item) =>
                  <TouchableOpacity
                    key={item}
                    onPress={() => {
                      navigation.navigate({}) // navigate to the homepage -> details page of each item
                  }}>
                    <Sell id={item.id} name={bookmarkItems[item]} price={bookmarkItems[item]} description={bookmarkItems[item]} category={bookmarkItems[item]} />
                  </TouchableOpacity>
                )
              }
            </ScrollView>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },

  activityIndicator: {
    // loading screen in middle
  },
})


