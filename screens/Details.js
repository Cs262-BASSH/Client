import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from "react-native";

/*
TODO: Swipe horizontally to view more images
*/

export default function Details({route}) {

  const {name, price, description, image} = route.params;
  //contentContainerStyle
  return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Image source={image} style={styles.image}></Image>
          <Text style={styles.price}>${price}</Text>
          <View>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View>
            <Text style={styles.contact}>Seller Contact: </Text>
            <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          </View>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: '#121212',
  },

  contentContainer: {

  },

  details: {
    alignItems: 'center',
  },

  image: {
    width: '95%',
    height: '80%', // problem
    borderWidth: '1%',
    borderColor: 'grey',
    borderRadius: '5%',
    marginBottom: '2%',
    alignSelf: 'center'
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  price: {
    color: 'white',
    fontWeight: 'bold',
  },

  descriptionTitle: {
    color: 'white',
  },

  description: {
    color: 'white',
  },

  seller: {
    color: 'white'
  },

  contact: {
    color: 'white',
  },
})