import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from "react-native";

/*
TODO: Swipe horizontally to view more images
*/
export default function Details({route}) {

  const {name, price, description, image} = route.params;
  //contentContainerStyle
  return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Image source={image} style={styles.image}></Image>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.contact}>Seller Contact: </Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
          <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
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
    width: '90%',
    height: '55%', // problem
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 1,
    marginBottom: '2%'
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  price: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },

  contact: {
    color: 'white',
  },
})