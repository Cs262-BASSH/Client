import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable, Alert } from 'react-native';
import lavaLamp from '../assets/lavalamp.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

/*
Fixes:
- background color
- Title needs to wraps down
- Description needs to wrap down
- Move bookmark icon to bottom left
- When size gets big, change layout
- white lines
- how image is fetched
- bookmark size, do not use hardcode value
*/

const Sell = (props) => {
  const [bookmarkState, setBookmarkState] = useState("bookmark-outline");
  const [sizeState, setSizeState] = useState(true);
  const [descriptionState, setDescriptionState] = useState(true);
  const [cartState, setCartState] = useState(true);

  const [addToCartState, setAddToCartState] = useState(false);

  const changeSize = () => {
    setSizeState(!sizeState);
    setDescriptionState(!descriptionState);
    setCartState(!cartState);
  }

  const changeBookmark = () => {
    const title = (bookmarkState === "bookmark-outline") ? "Add to Bookmark" : "Remove From Bookmark";
    const msg = (bookmarkState === "bookmark-outline") ? "Do you wish to add this item to your bookmark?" : "Do you wish to remove this item from your bookmark?";

    Alert.alert(
      title,
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Do nothing"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            if (bookmarkState === 'bookmark-outline') {
              setBookmarkState("bookmark");
              // TODO: add item to bookmark object
            }
            else {
              setBookmarkState("bookmark-outline");
              // TODO: remove item from bookmark object
            }
          }
        }
      ]
    );
  }

  const addItemToCart = () => {
    const title = (addToCartState === false) ? "Add to Cart": "Remove From Cart";
    const msg = (addToCartState === false) ? "Do you wish to add this item to your cart?" : "Do you wish to remove this item from your cart?";

    Alert.alert(
      title,
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Do nothing"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");

            if (addToCartState === false) {
              // TODO: add item to cart object
            }
            else {
              // TODO: remove item from cart object
            }


            setAddToCartState(!addToCartState);
        }
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3} style={styles.Sell} onPress={() => changeSize()} >
        <View>
          <Image source={lavaLamp} style={sizeState ? styles.imageSmall : styles.imageBig}></Image>
        </View>

        <View>
          <Text style={styles.titleSmall}>{props.item}</Text>

          <View style={styles.priceAndBookmark}>
            <View>
              <Text style={styles.priceSmall}>${props.price}</Text>
            </View>

            <View style={styles.pressBookmark}>
              <Pressable onPress={() => changeBookmark()}>
                <Icon name={bookmarkState} size={65} style={styles.bookmark}/>
              </Pressable>
            </View>
          </View>

          <View>
            <Text style={descriptionState ? styles.descriptionHide : styles.descriptionShow}>{props.description}</Text>
              <TouchableOpacity activeOpacity={0.3} style={cartState ? styles.cartHide : styles.cartShow} onPress={() => addItemToCart()}>
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
    backgroundColor: '#121212',
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
