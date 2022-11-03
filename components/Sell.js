import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

/*
Fixes:
- white lines
- how image is fetched
- bookmark size, do not use hardcode value
*/

const Sell = (props) => {
  // Determines whether the description and details button is shown or not
  const [hide, setHide] = useState(true);

  const [bookmark, setBookmark] = useState("bookmark-outline"); // Set to not filled
  const [bookmarkState, setBookmarkState] = useState(false); // False = item not in bookmark

  const [item, setItem] = useState();
  const [bookmarkItems, setBookmarkItems] = useState([]); // List of items in bookmark
  console.log("Console2: " + JSON.stringify(bookmarkItems, undefined, 2)); // not working

  const newItem = {
    id: props.id,
    name: props.name,
    price: props.price,
    description: props.description,
    category: props.category,
    image: props.image
  };

  const changeSize = () => {
    setHide(!hide);
  }

  const savedItem = async (item) => {
    try {
      const saving = JSON.stringify(item);
      await AsyncStorage.setItem("@bookmark_key", saving);
    }
    catch (error) {
      console.log(error);
    }
  }

  // const addItemToBookmark = useCallback(
  //   () => {
  //     setBookmarkItems((oldBookmark) => [...oldBookmark, newItem]);
  //   },
  //   [bookmarkItems],
  // )

  const addItemToBookmark = async () => {
    // if (Object.values(bookmarkItems).find((item) => {item.id === props.id})) {
    //   Alert.alert(`${props.name} already exists in bookmark.`);
    //   return;
    // }
    // else {
      setItem(props)
      setBookmarkItems((oldBookmark) => [...oldBookmark, newItem]);
      await savedItem([...bookmarkItems, newItem]);
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

  const handleBookmark = () => {
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
              addItemToBookmark();
            }
            else {
              console.log("Removing item from bookmark!");
              setBookmark("bookmark-outline");
              setBookmarkState(false);

              // TODO: remove item from bookmark object
              //removeItemFromBookmark();
            }
          }
        }
      ]
    );
  }

  // const loadBookmark = async () => {
  //   try {
  //     const getBookmark = await AsyncStorage.getItem("bookmark_key");
  //     const bookmarkObject = getBookmark != null ? getBookmark : [];

  //     setBookmarkItems(JSON.parse(bookmarkObject));
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
  //   loadBookmark();
  }, [])

  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <TouchableOpacity activeOpacity={0.3} style={styles.Sell} onPress={() => changeSize()} >
        <View style={styles.container}>
          <View>
            <Image source={props.image} style={styles.image}></Image>
          </View>
          <View style={styles.information}>
            <View>
              <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.priceAndBookmark}>
              <View>
                <Text style={styles.price}>${props.price}</Text>
              </View>
              <View style={styles.pressBookmark}>
                <Pressable onPress={() => handleBookmark()}>
                  <Icon name={bookmark} size={60} style={styles.bookmark}/>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={hide ? styles.hide : styles.show}>
          <Text style={styles.description}>{props.description}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                "Details", {
                  id: props.id,
                  name: props.name,
                  price: props.price,
                  description: props.description,
                  category: props.category,
                  image: props.image
                }
              )
            }>
            <Text style={styles.detail}>Details</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Sell;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#121212',
  },

  container: {
    flexDirection: 'row',
  },

  information: {
    width: "69%",
  },

  Sell: {
    backgroundColor: 'white',
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
    borderWidth: 1,
    borderRadius: 2,
    padding: "3%",
    borderColor: "grey",
  },

  image: {
    height: 100, // percentage
    width: 100, // percentage
    margin: "2%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: "-2%",
  },

  priceAndBookmark: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: "1%",
  },

  price: {
    fontWeight: 'normal',
    fontSize: 20,
    color: 'maroon',
  },

  pressBookmark: {
  },

  bookmark: {
    color: "gold",
  },

  hide: {
    display: 'none',
  },

  description: {
    fontSize: 20,
    marginTop: "2%",
  },

  detail: {
    width: "28%",
    fontSize: 20,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginTop: '1%',
    borderWidth: 1,
    borderColor: "grey",
    textAlign: 'center',
  },
});