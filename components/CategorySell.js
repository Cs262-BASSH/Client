import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Button, TouchableHighlight, Pressable } from 'react-native';
import lavaLamp from '../assets/lavalamp.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

// TODO: fix which item are fetch -> not outputted according to category

const categorySell = (props) => {
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
    <View style={styles.buttonView}>
      <TouchableOpacity activeOpacity={0.3} style={styles.Sell} onPress={() => changeSize()} >

        <Pressable style={description ? styles.descriptionShow : styles.descriptionHide} onPress={() => changeBookmark()}>
          <Icon name={bookmark} size= {35} style={styles.bookmark}/>
        </Pressable>

        <View>
          <Image source={lavaLamp} style={size ? styles.imageSmall : styles.imageBig}></Image>
        </View>

        <View>
          <Text style={styles.titleSmall}>{props.item}</Text>

          <View style={styles.priceAndBookmark}>
            <Text style={styles.priceSmall}>${props.price}</Text>
          </View>
            <View style = {styles.textContainer}>
             <Text style={description ? styles.descriptionHide : styles.descriptionShow} >{props.description}</Text>
           </View>

          </View>
      </TouchableOpacity>
    </View>
  )
}

export default categorySell;

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










  container: {
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start'
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