import lavaLamp from '../assets/lavalamp.jpg'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable, Alert } from 'react-native';
import { useEffect, useState } from 'react';

/*
Fixes:
- Title needs to wraps down
- Description needs to wrap down
- Move bookmark icon to bottom left
- When size gets big, change layout
- white lines
- how image is fetched
- bookmark size, do not use hardcode value
*/

const Sell = (props) => {
  const [sizeState, setSizeState] = useState(true); // True = small
  const [bookmark, setBookmark] = useState("bookmark-outline"); // Set to not filled
  const [bookmarkState, setBookmarkState] = useState(false); // False = item not in cart
  const [descriptionState, setDescriptionState] = useState(true); // True = hidden

  const [bookmarkItems, setBookmarkItems] = useState([]); // List of items in bookmark

  const changeSize = () => {
    setSizeState(!sizeState);
    setDescriptionState(!descriptionState);
  }

  const savedItem = async (item) => {
    try {
      const saving = JSON.stringify(item);
      await AsyncStorage.setItem("bookmark_key", saving);
    }
    catch (error) {
      console.log(error);
    }
  }

  const addItemToBookmark = async (props) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      category: props.category
    };

    // if (Object.values(bookmarkItems).find((item) => {item.id === props.id})) {
    //   Alert.alert(`${props.name} already exists in bookmark.`);
    //   return;
    // }
    // else {
      setBookmarkItems([...bookmarkItems, item]);
      await savedItem([...bookmarkItems, item]);
    // }
  }

  const removeItemFromBookmark = (props) => {
    const item = {
      "id": props.id,
      "name": props.name,
      "price": props.price,
      "description": props.description,
      "category": props.category
    };
    // delete x[itemToRemove]; // or iterate through each element object
  }

  const handleBookmark = (props) => {
    const title = (bookmark === "bookmark-outline") ? "Add to Bookmark" : "Remove From Bookmark";
    const msg = (bookmark === "bookmark-outline") ? "Do you wish to add this item to your bookmark?" : "Do you wish to remove this item from your bookmark?";

    Alert.alert(
      title,
      msg,
      [
        {
          text: "Cancel",
          onPress: () => {console.log("Do nothing")},
          style: "cancel"
        },
        {
          text: "Confirm",
          onPress: () => {
            if (bookmark === 'bookmark-outline') { // or item not in array
              console.log("Adding item to bookmark!");
              setBookmark("bookmark");
              setBookmarkState(true);

              // TODO: add item to bookmark object
              addItemToBookmark(props);
            }
            else {
              console.log("Removing item from bookmark!");
              setBookmark("bookmark-outline");
              setBookmarkState(false);

              // TODO: remove item from bookmark object
              removeItemFromBookmark(props);
            }
          }
        }
      ]
    );
  }

  useEffect(() => {
    const loadBookmark = async () => {
      try {
        const response = await AsyncStorage.getItem("bookmark_key");
        setBookmarkItems(JSON.parse(response));
      }
      catch (error) {
        console.log(error);
      }
    }
    loadBookmark();
  }, [bookmarkItems])

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3} style={styles.Sell} onPress={() => changeSize()} >


      <View style={styles.priceAndName}>
        <View>
          <Image source={lavaLamp} style={sizeState ? styles.imageSmall : styles.imageBig}></Image>
        </View>

        <View>
          <Text style={styles.titleSmall}>{props.name}</Text>

          <View style={styles.priceAndBookmark}>
            <View>
              <Text style={styles.priceSmall}>${props.price}</Text>
            </View>
          </View>

          <View>
            <Text style={descriptionState ? styles.descriptionHide : styles.descriptionShow}>{props.description}</Text>
          </View>

        </View>
      </View>
              <View style={styles.pressBookmark}>
              <Pressable onPress={() => handleBookmark(props)}>
                <Icon name={bookmark} size={65} style={styles.bookmark}/>
              </Pressable>
            </View>
      </TouchableOpacity>
    </View>
  )
}

export default Sell;

const styles = StyleSheet.create({
  Sell: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between'
  },

  imageSmall: {
    height: 75,
    width: 75,
  },

  imageBig: {
    height: 150,
    width: 100,
  },

  titleSmall: {
    fontSize: 20,
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
    fontSize: 20,
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



  pressBookmark: {
    justifyContent: 'flex-end'
  },


  priceAndName: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },



  container: {
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',

},


buttonView:{
    // marginTop: 20,
    // width: '90%',
    // justifyContent: 'flex-start'
},

boxContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'flex-start',
    borderWidth: 3,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius:20,
},
textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 100,
    marginTop: 10,
},
itemName: {
    fontWeight: 'bold'
},
starcontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
}
});
