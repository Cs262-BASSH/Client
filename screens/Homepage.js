import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable } from 'react-native';
import lavaLamp from '../assets/lavalamp.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

/*
Fixes:
- Maybe use TouchableHighlight instead of TouchableOpacity
- Title needs to wraps down
- Description needs to wrap down
- Move bookmark icon to bottom left
*/

/*
Have not done:
- When size gets big, change layout
*/

const Upload = (props) => {
  const [bookmark, setBookmark] = useState("bookmark-outline");
  const [size, setSize] = useState(true)
  const [description, setDescription] = useState(true)

  const changeBookmark = () => {
    if (bookmark === 'bookmark-outline') {
      setBookmark("bookmark");
    }
    else {
      setBookmark("bookmark-outline");
    }
  }

  const changeSize = () => {
    setSize(!size);
    setDescription(!description);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3} style={styles.upload} onPress={() => changeSize()} >
        <View>
          <Image source={lavaLamp} style={size ? styles.imageSmall : styles.imageBig}></Image>
        </View>

        <View>
          <Text style={styles.titleSmall}>Lava Lamp</Text>

          <View style={styles.priceAndBookmark}>
            <Text style={styles.priceSmall}>$99.99</Text>

            <Pressable onPress={() => changeBookmark()}>
              <Icon name={bookmark} size= {65} style={styles.bookmark}/>
            </Pressable>
          </View>
          <Text style={description ? styles.descriptionHide : styles.descriptionShow}>This is a cool lava lamp. You should buy it! Contact me @ ...</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function Homepage() {

  return (
    <ScrollView style={styles.container}>
      {/* A hardcoded example */}
      <Upload></Upload>

      {/* A hardcoded example */}
      <Upload></Upload>

      {/* A hardcoded example */}
      <Upload></Upload>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c19a6b',
  },

  upload: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 5,
  },

  imageSmall: {
    height: 125,
    width: 75,
  },

  imageBig: {
    height: 200,
    width: 75,
  },

  titleSmall: {
    fontSize: 30,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  priceAndBookmark: {
    flexDirection: 'row',
    alignItems: 'center'

  },

  priceSmall: {
    fontWeight: 'normal',
    fontSize: 30,
    color: '#900',
    alignItems: 'center',
  },

  bookmark: {
    color: "gold",
    // paddingLeft: 85,
    // paddingTop: 20,
  },

  descriptionHide: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'none',
  },

  descriptionShow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
