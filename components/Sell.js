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
- When size gets big, change layout
- white lines
*/

const Sell = (props) => {
  const [bookmark, setBookmark] = useState("bookmark-outline");
  const [size, setSize] = useState(true);
  const [description, setDescription] = useState(true);
  const [addToCart, setAddToCart] = useState(true);



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
    setAddToCart(!addToCart);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3} style={styles.Sell} onPress={() => changeSize()} >
        <View>
          <Image source={lavaLamp} style={size ? styles.imageSmall : styles.imageBig}></Image>
        </View>

        <View>
          <Text style={styles.titleSmall}>{props.item}</Text>

          <View style={styles.priceAndBookmark}>
            <View>
              <Text style={styles.priceSmall}>{props.price}$</Text>
            </View>

            <View style={styles.pressBookmark}>
              <Pressable onPress={() => changeBookmark()}>
                <Icon name={bookmark} size= {65} style={styles.bookmark}/>
              </Pressable>
            </View>
          </View>

          <View>
            <Text style={description ? styles.descriptionHide : styles.descriptionShow}>{props.description}</Text>
              <TouchableOpacity style={addToCart ? styles.cartHide : styles.cartShow}>
                <Text>Add to Cart</Text>
              </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Sell;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },

  Sell: {
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
    width: 100,
  },

  imageBig: {
    height: 200,
    width: 100,
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
    color: 'maroon',
    alignItems: 'center',
  },

  pressBookmark: {
    marginTop: "5%",
    marginLeft: "35%"
  },

  bookmark: {
    color: "gold",
  },

  descriptionHide: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'none',
  },

  descriptionShow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: "50%"
  },

  cartHide: {
    display: "none",
  },

  cartShow: {
    borderColor:'black',
    backgroundColor: "red",
    width: 50,
  },
});
